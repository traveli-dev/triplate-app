# Triplate
旅のテンプレートを作る旅程管理アプリ

URL: https://traveli.app

Storybook:https://traveli-dev.github.io/traveli-app/storybook

## 🔑 Requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## Setup
```sh
  $ touch ./front/.env
  # envファイルに環境変数をコピーしてください
  $ make init
  # 途中でYnがでるのでYを押す
  # 表示されたURLにアクセス
  # traveliアカウントでログイン
  # 画面の指示に従い，最後に出てくるトークンをコピペしてください
  # Success! Logged in as ~~~と出てきたらOKです
  $ make up
```

## Other Commands
```sh
  make up
  make down
  make exec
  make yarn-install
  make check
  make format
```
