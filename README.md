# Traveli
“メモ帳以上、旅程表アプリ未満” の旅程管理アプリ  

URL: https://traveli.app
Storybook: https://traveli-dev.github.io/traveli-web/storybook

## 🔑 Requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## Setup
```sh
  $ touch ./front/.env
  # envファイルに環境変数をコピーしてください
  $ docker compose build
  $ docker compose run --rm node sh
  # firebaseの設定ファイルを作る
  $ yarn init:firebase
  # 初回のみログインが必要
  $ firebase login --no-localhost
  # 表示されたURLにアクセス
  # traveliアカウントでログイン
  # 画面の指示に従い，最後に出てくるトークンをコピペしてください
  # Success! Logged in as ~~~と出てきたらOKです
  $ exit
  $ docker compose up
```