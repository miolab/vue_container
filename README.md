# Vue.js v2 Dev Container

[![miolab](https://circleci.com/gh/miolab/vue_container.svg?style=svg)](https://github.com/miolab/vue_container)

**Vue.js** (v2) の Docker 開発環境リポジトリ

<img width="600" alt="vue" src="https://user-images.githubusercontent.com/33124627/77903090-4463d480-72bd-11ea-86c6-c62023bfa3f0.png">

- バージョン

  ```sh
  $ docker-compose run --rm app yarn list vue
  └─ vue@2.6.12

  $ docker-compose exec app sh -c "node --version && vue --version"
  v14.16.0
  @vue/cli 4.5.11
  ```

## Usage

以下コード中、

- `$ ...`は Terminal での操作
- `# ...`は Docker コンテナ内での操作

を表す。

### ビルド・起動

## コンテナビルド

- ビルド

  ```sh
  $ git clone https://github.com/miolab/vue_container.git

  $ cd vue_container

  $ docker-compose build
  ```

- 起動

  ```sh
  $ docker-compose up -d
  ```

  ```sh
  $ docker-compose exec app sh
  ```

  - Vue が入ったか確認

    ```
    # vue --version
    @vue/cli 4.5.11
    ```

## Vue 開発環境構築（例）

```sh
# vue create .

?  Your connection to the default yarn registry seems to be slow.
   Use https://registry.npm.taobao.org for faster installation? No


Vue CLI v4.5.11
? Generate project in current directory? Yes


Vue CLI v4.5.11
? Please pick a preset: Default ([Vue 2] babel, eslint)
? Pick the package manager to use when installing dependencies: Yarn


Vue CLI v4.5.11
✨  Creating project in /usr/src/app.
⚙️  Installing CLI plugins. This might take a while...

yarn install v1.22.5
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.


success Saved lockfile.
Done in 318.73s.
🚀  Invoking generators...
📦  Installing additional dependencies...

yarn install v1.22.5
[1/4] Resolving packages...
success Already up-to-date.
Done in 1.76s.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project app.
👉  Get started with the following commands:

 $ yarn serve

```

- サーバー起動（サンプル表示） `yarn serve`

  ```sh
  $ docker-compose exec app yarn serve
  ```

  サーバーが立ち上がったら、[http://0.0.0.0:8080/](http://0.0.0.0:8080/)で確認。

## テスト実行

```sh
$ docker-compose exec app sh -c "yarn run test"
```

## lint 修正

```sh
$ docker-compose exec app yarn lint -h
```

---

# 補足

### ~~アプデ等で環境がおかしくなったら~~

- ~~`$ docker-compose run --rm app npm rebuild` 試す。~~

### 削除する場合

- コンテナ停止は以下

  ```
  # exit
  ```

  ```
  $ docker-compose stop
  ```

- コンテナやイメージをまとめて全削除

  ```
  $ docker-compose down --rmi all --volumes
  ```

---

## 参考

## Vue Router

https://router.vuejs.org/ja/installation.html#vue-cli

インストール

```sh
$ docker-compose run --rm app yarn add vue-router
```

---

#### 公式ガイド

- v2 https://jp.vuejs.org/v2/guide/index.html
- v3 https://v3.ja.vuejs.org/guide/introduction.html

#### その他

- https://qiita.com/Syoitu/items/4d2d51189440a69abbac
- https://qiita.com/ryo2132/items/3d0379e85c38a9a5b355

- https://qiita.com/fruitriin/items/3249bb24d60932bb42ee

npm と yarn のコマンド早見表

- https://qiita.com/rubytomato@github/items/1696530bb9fd59aa28d8

---

# app

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

- options

  ```
  $ docker-compose exec app yarn lint -h
  yarn run v1.22.5
  $ vue-cli-service lint -h

    Usage: vue-cli-service lint [options] [...files]

    Options:

      --format [formatter]   specify formatter (default: codeframe)
      --no-fix               do not fix errors or warnings
      --no-fix-warnings      fix errors, but do not fix warnings
      --max-errors [limit]   specify number of errors to make build failed (default: 0)
      --max-warnings [limit] specify number of warnings to make build failed (default: Infinity)
  ```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
