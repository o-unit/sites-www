+++
date = '2026-04-30T00:00:00+09:00'
draft = false
title = 'Hugo(snapパッケージ版)をubuntu24.04にインストール'
categories = ["自宅サーバ"]
tags = ["ubuntu","hugo"]
summary = "自宅サーバのubuntu24.04にspan版のhugoをインストールするまでの手順をメモしました。いわゆる自分用メモです。"
+++

> 当記事はchatGPTの回答をベースに多少の修正を加えて作成されました。

自宅サーバのubuntu24.04にspan版のhugoをインストールするまでの手順をメモしました。  
いわゆる自分用メモです。  
今後また自宅サーバのSSDが故障してシステムが全消失した時用。

## 目次

| **目次** |
|:---|
|インストール環境の確認|
|snapでHugoをインストール|
|新規サイト作成|
|テーマ導入|
|Hello Worldページ作成|
|ローカルで確認|
|本番ビルド|
|nginxで公開|

### インストール環境の確認

今回インストールする環境は以下の通り。
|||
|----:|:-----|
| **OS** |Ubuntu Server 24.04.4 LTS|
| **CPU** |Core i7 7700|
| **Memory** |32GB|

### snapでHugoをインストール
以下のsudo snapコマンドでインストール。  
インストール後、コマンドが使えるかどうか確認。  

```bash
sudo snap install hugo
✔ 確認
hugo version
↓こんな感じのメッセージが出てたらOK
hugo v0.161.0-98d396c16a07b51df06e7673d817a3880da6218d+extended linux/amd64 BuildDate=2026-04-28T11:46:32Z VendorInfo=snap:0.161.0
```
> snap版は通常「extended版」が入るため、SCSSなども使えます。

### 新規サイト作成

以下のコマンドでhugoのサイトが新しく作成されます。  
ホームディレクトリ配下で行うことを推奨。  
「my-hugo-newsite」はお好きな文字列でどうぞ。

```bash
# (ホームディレクトリ配下で実施)
hugo new site my-hugo-newsite
cd my-hugo-newsite
ls
```

##### 📂 ディレクトリ構成の確認
|||
|:----|:----|
|my-hugo-newsite/| |
|├── archetypes/|記事のテンプレート的なものの場所|
|├── assets/| |
|├── content/|記事を書く場所|
|├── layouts/|自分でテーマに手を加えるときの場所|
|├── static/|画像・CSSなど|
|├── themes/|配布されているテーマを格納する場所|
|└── hugo.toml|設定ファイル|


### テーマ導入

Hugoはテーマがないと見た目がほぼ空です。  
ここではシンプルなテーマ「Ananke」を使います。

```bash
# (my-hugo-newsiteで実施)
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
```
```bash:設定ファイル編集(お好みのエディタで)
vi hugo.toml
```
以下を追加：

```
baseURL = 'http://example.org/'
languageCode = 'ja'
title = 'My Hugo Site'
theme = 'ananke'
```

### Hello Worldページを作成
```bash
# (my-hugo-newsiteで実施)
hugo new content posts/helloworld.md
ls -l content/post/   # helloworld.mdが作成されていることを確認
```
hugo new content コマンドは hugo new でもOK。  
頻繁にコンテンツを作成する人は短いほうが打ちやすいかも？  
個人的には何を作っているか意識したいので hugo new content を推します。

```bash:設定ファイル編集(お好みのエディタで)
# (content/postsに移動してから開いてもOK)
vi content/posts/helloworld.md
```

こんな感じの中身に変更。
```markdown
+++
title = "Hello World"
date = "2026-04-24T12:34:56+09:00"
draft = false
+++

# Hello World

これは**Hugo**で作った最初のページです！
```

**✔ ポイント**
+++ で囲われた部分はフロントマターと言って、本文以外の設定を書くところ。  
**title:** はブラウザのタブ部分に表示されたりする文字列。  
**date:** は記事の作成日を指定。  
**draft:** は下書きかどうかを指定。**false** を指定することで下書きじゃないよ！と指定。  
他にもフロントマターの設定はたくさんあるけどそれはまた別の記事で。

2回目の +++ の次の行からは本文。  
本文はMarkdownで書ける。  

### ローカルで表示確認
以下のコマンドで簡易webサーバが起動します。

```bash
# (my-hugo-newsiteで実施)
hugo server
```
ブラウザで http://localhost:1313 にアクセスすると、Hello Worldページが見えます。
見えなかったら **helloworld.md** が **draft: false** になっているか再確認。

### 本番用にビルド
以下のコマンドで公開用のhtmlファイルなどが作成されます。
```bash
# (my-hugo-newsiteで実施)
hugo
# (以下のコマンドでpublicディレクトリにファイルができていることを確認)
ls -al public
```

publicの中身がそのままWeb公開できる静的サイトです。  
GitHub PagesやCloudflare Pagesなどにアップロードすればあなたのwebサイトが全世界に配信されるでしょう。  

### 🧠 補足（重要ポイントまとめ）  
##### Hugoのよくあるハマり
|症状|原因|
|:--|:--|
|ページ出ない|draft: true|
|見た目崩壊|テーマ未設定|
|画像出ない|staticに置いてない|

##### Snap版Hugoでよくあるハマり
|症状|原因|
|:--|:--|
|/var/www に出力できない|Snapの仕様で/home 以外の書き込みが制限されてる|
|SCSSがビルドされない<br />PostCSSが効かない|snapは外部バイナリを制限|
→Snap版の仕様が面倒なら公式サイトからバイナリをダウンロードするか、ソースからビルド
