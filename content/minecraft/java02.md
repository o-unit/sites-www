+++
date = '2026-04-25T01:43:09+09:00'
lastmod = '2026-04-26T19:00:00+09:00'
draft = false
title = 'テスト中サーバ'
categories = ["Minecraft"]
tags = ["Minecraft","サーバ",""]
toc = false
sidebar = false
+++
### テスト中サーバ
Java版のプラグインサーバにいくつかプラグインを追加しているサーバで、  
エンチャントが追加されているのが特徴です。  
Bedrock版とのクロスプレイに対応。  
どんなプラグインを組み合わせると楽しいかテスト中。
<!--more-->
#### バニラと異なる要素
- エンチャントが大量に追加されています。  
  各エンチャントの情報は[ExcellentEnchantsのwiki(英語)](https://nightexpressdev.com/excellentenchants/)のEnchantment Listを参照してください。  
  ただし、一部のエンチャントは無効化してあります。  
  また、ExcellentEnchantsとは別に[Veinminer](https://modrinth.com/datapack/veinminer)も追加エンチャントになります。
- エンチャント時のレベル上限が上がっています。
- クリーパーの爆発によるブロック破壊は無効化されています。(ダメージは食らいます。)
- Java版クライアントから接続時、[Distant Horizons Support](https://gitlab.com/distant-horizons-team/distant-horizons-server-plugin/-/wikis/home)のコマンドが使えます。
- 死亡時にアイテムがチェストに格納されます。
- 下付きハーフブロックと階段に座ることができます。
- コンパスを持った状態でしゃがみながら使用するとウェイポイントメニューが開けます。  
  登録した地点まで道案内したり、ワープしたりできます。

#### Bedrock版の注意点
- 追加エンチャント本はBedrock版の仕様上、通常の金床画面ではエンチャントできません。  
  メインハンドを何も持たない状態でしゃがみながら金床画面を開くと専用の画面になるので、その画面でエンチャントしてください。

#### サーバアプリ / プラグインなど
- [Purpur](https://purpurmc.org/) version 1.21.11 build 2568
  - サーバソフトウェア。  
    bukkitから派生したPaperのさらに派生したソフトウェアで、色々細かく設定できる。
- [Geyser-Spigot](https://geysermc.org/) 2.9.5-SNAPSHOT
- [floodgate](https://geysermc.org/) 2.2.5-SNAPSHOT (b132-5a72b6a)
  - GeyserはBedrock版のクライアントが参加できるようにするソフトウェア。  
    floodgateはBedrock版のアカウントだけでJava版のサーバに参加できるようにするソフトウェア。  
    この2つを組み合わせることでJava版/Bedrock版の両方から参加できるようになる。
- [Geyser-Recipe-Fix](https://modrinth.com/plugin/geyser-recipe-fix) 1.5
  - プラグインで追加されたエンチャント本をBedrock版で金床エンチャントするためのプラグイン。
- [GeyserMovementFix](https://modrinth.com/plugin/geysermovementfix) 1.0.0
  - Bedrock版で移動時にカクつくのを抑えるプラグイン。
- [ViaVersion](https://modrinth.com/plugin/viaversion) 5.9.0
  - サーバより新しいバージョンのクライアントを接続できるようにするプラグイン。
- [ViaBackwards](https://modrinth.com/plugin/viabackwards) 5.9.0
  - サーバより古いバージョンのクライアントを接続できるようにするプラグイン。
- [DiscordSRV](https://modrinth.com/plugin/discordsrv) 1.30.5
  - DiscordとMinecraft間でチャットができるようになるプラグイン。
- [BlueMap](https://modrinth.com/plugin/bluemap) 5.16
- [BlueMapDeathMarkers](https://github.com/TechnicJelle/BlueMapDeathMarkers) 1.4
- [BlueMapOfflinePlayerMarkers](https://github.com/TechnicJelle/BlueMapOfflinePlayerMarkers) 3.0
  - ブラウザから見られるマップを出力してくれるプラグイン。
    死亡地点の表示と、オフラインのプレイヤーの表示機能を追加。
- [Chunky](https://modrinth.com/plugin/chunky) 1.4.40
  - 指定した範囲のチャンクの事前生成をしてくれるプラグイン。
- [ExcellentEnchants](https://modrinth.com/plugin/excellentenchants) 5.4.1
  - 約80種類のエンチャントを追加してくれるプラグイン。
- [Veinminer](https://modrinth.com/datapack/veinminer) 2.6.0
- [Veinminer-Enchantment](https://modrinth.com/datapack/veinminer-enchantment) 2.6.1
  - 鉱石の一括採掘用エンチャントを追加してくれるプラグイン。
- [LockWithPassword](https://modrinth.com/plugin/lwp) 1.0.1
  - チェストをパスワードで保護出来るプラグイン。
- [AnvilUnlocker](https://modrinth.com/plugin/anvilunlocker) 1.1.2
  - 金床のレベル制限を解除してくれるプラグイン。
- [CreeperGuard](https://modrinth.com/plugin/creeper-guard) 1.4
  - クリーパーの爆発でブロックが破壊されなくなるプラグイン。
- [DHSupport](https://modrinth.com/plugin/distant-horizons-support) 0.13.0
  - Distant Horizonsをサーバ側でサポートしてくれるプラグイン。
- [DeathChest](https://modrinth.com/datapack/deathchest) 1.5.6
  - 死亡時にアイテムをちぇくとに格納するプラグイン。
- [DeathCoords](https://modrinth.com/plugin/deathcoords) V1.0
  - 死亡時に座標を残すプラグイン。
- [DeathLogger](https://modrinth.com/plugin/deathlogger-ashkiano) 1.0
  - 死亡時の座標をサーバ側のログに残すプラグイン。
- [EssentialsC](https://modrinth.com/plugin/essentialsc) 4.1.6
- [LocatorToggle](https://modrinth.com/plugin/locatortoggle) 1.3
- [Sit](https://modrinth.com/plugin/stairsit) 1.7.3
  - 下付きハーフブロックと階段に座れるようになるプラグイン。
- [Vault](https://www.spigotmc.org/resources/vault.34315/) 1.7.3-b131
- [Waypoints](https://modrinth.com/plugin/waypoints) 4.5.13
  - 登録した地点へ案内したりワープしたりできるプラグイン。
- [WorldEdit](https://modrinth.com/plugin/worldedit) 7.4.2+7450-eb8e82c
  - 建築勢御用達のプラグイン。
    今回はWorldGuardを使用したいので建築系は無効化。
- [WorldGuard](https://modrinth.com/plugin/worldguard) 7.0.16+2355-f7fded2
  - ワールドを保護するプラグイン。
- [Shopkeepers](https://dev.bukkit.org/projects/shopkeepers) 2.25.0
  - プレイヤー独自のショップが作れるプラグイン。
- [Shopkeepers-BlueMap](https://github.com/Shopkeepers/Shopkeepers-BlueMap) 1.1.0
  - Shopkeepersプラグインで作成したショップをBluemap上に表示するプラグイン。
- [LagFixer](https://modrinth.com/plugin/lagfixer/versions) 1.5.2 [build 141]
  - ラグを少なくしてくれるプラグイン。
- [LuckPerms](https://luckperms.net/) 5.5.42
  - 各種プラグインの権限編集を楽にしてくれるプラグイン。
- [nightcore](https://modrinth.com/plugin/nightcore) 2.15.1
  - ExcellentEnchantsを動作させるために必要なライブラリ。
- [PlaceholderAPI](https://modrinth.com/plugin/placeholderapi) 2.12.2
  - 色々なプラグインで使うライブラリ。
    プレースホルダー(%xxxxx%)を追加できるようにしているらしい。
- [ProtocolLib](https://github.com/dmulloy2/ProtocolLib/) 5.4.1-SNAPSHOT-f606cc9
  - 色々なプラグインで使うライブラリ。
    minecraftのプロトコルを各種プラグインで扱いやすくするもの？
- [packetevents](https://modrinth.com/plugin/packetevents) 2.12.1
  - 色々なプラグインで使うライブラリ。