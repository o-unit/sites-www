export async function onRequest(context) {
  const { env, request } = context;

  // 1. Cloudflareのキャッシュを確認（30秒間は自宅サーバーへアクセスしない）
  const cache = caches.default;
  const cacheKey = new Request(request.url, request);
  let response = await cache.match(cacheKey);
  if (response) {
    return response;
  }

  // 2. 環境変数からサーバーリスト（JSON配列）を取得
  // 未設定の場合は空配列とする
  let targets = [];
  try {
    targets = JSON.parse(env.MC_SERVERS || "[]");
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid MC_SERVERS config" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  // 3. 登録された全サーバーへ並列でアクセス（タイムアウト3秒）
  const results = await Promise.all(
    targets.map(async (server) => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      try {
        const res = await fetch(server.url, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // オンライン時の返却データ
        return {
          id: server.id,
          name: server.label || data.name || "Unknown Server",
          online: true,
          players: data.players ?? 0,
          maxPlayers: data.maxPlayers ?? 0,
          version: data.version || ""
        };
      } catch (err) {
        clearTimeout(timeoutId);
        // オフライン・タイムアウト時の返却データ
        return {
          id: server.id,
          name: server.label || "Unknown Server",
          online: false,
          players: 0,
          maxPlayers: 0,
          version: ""
        };
      }
    })
  );

  // 4. 合計人数を計算してレスポンスを作成
  const totalPlayers = results.reduce((sum, s) => sum + (s.online ? s.players : 0), 0);
  const body = JSON.stringify({
    updatedAt: new Date().toISOString(),
    totalPlayers,
    servers: results
  });

  response = new Response(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // 30秒間Cloudflareのエッジにキャッシュさせる
      "Cache-Control": "public, max-age=30, s-maxage=30"
    }
  });

  // キャッシュに保存
  context.waitUntil(cache.put(cacheKey, response.clone()));

  return response;
}
