# Vue.js Mock

[![miolab](https://circleci.com/gh/miolab/vue_container.svg?style=svg)](https://github.com/miolab/vue_container)

__Vue.js__ のDocker開発環境リポジトリ

<img width="600" alt="vue" src="https://user-images.githubusercontent.com/33124627/77903090-4463d480-72bd-11ea-86c6-c62023bfa3f0.png">

* バージョン

  ```sh
  $ docker-compose run --rm app yarn list vue
  └─ vue@2.6.12

  $ docker-compose exec app sh -c "node --version && vue --version"
  v14.16.0
  @vue/cli 4.5.11
  ```

## Usage

以下コード中、

* `$ ... `はTerminalでの操作
* `# ... `はDockerコンテナ内での操作

を表す。

### ビルド・起動

## コンテナビルド

* ビルド

  ```sh
  $ git clone https://github.com/miolab/vue_container.git

  $ cd vue_container

  $ docker-compose build
  ```

* 起動

  ```sh
  $ docker-compose up -d
  ```

  ```sh
  $ docker-compose exec app sh
  ```

  * Vueが入ったか確認

  ```
  # vue --version
  @vue/cli 4.5.11
  ```

## Vue開発環境構築（例）

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

* サーバー起動（サンプル表示） `yarn serve`

  ```sh
  $ docker-compose exec app yarn serve
  ```

  サーバーが立ち上がったら、[http://0.0.0.0:8080/](http://0.0.0.0:8080/)で確認。

## テスト環境構築

1.

```sh
$ docker-compose run --rm app yarn add --dev jest @vue/test-utils
```

`package.json`

```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test": "jest" // <- add
  },
```

2.

```sh
$ docker-compose run --rm app yarn add --dev vue-jest
```

`package.json`

```json
  ...
  "readme": "ERROR: No README data found!",
  // add ->
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "vue"
    ],
    "transform": {
      ".*\\.(vue)$": "vue-jest"
    },
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1"
    }
  }
```

3.

```sh
$ docker-compose run --rm app yarn add --dev babel-jest
```

`package.json`

```json
    "transform": {
      ".*\\.(vue)$": "vue-jest",
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest" // -> add
    },
```

---

# 補記

### ~~アプデ等で環境がおかしくなったら~~

* ~~`$ docker-compose run --rm app npm rebuild` 試す。~~
### 削除する場合

* コンテナ停止は以下

  ```
  # exit
  ```

  ```
  $ docker-compose stop
  ```

* コンテナやイメージをまとめて全削除

  ```
  $ docker-compose down --rmi all --volumes
  ```

---

## 参考

#### 公式ガイド

- v2 https://jp.vuejs.org/v2/guide/index.html
- v3 https://v3.ja.vuejs.org/guide/introduction.html

#### その他

- https://qiita.com/Syoitu/items/4d2d51189440a69abbac
- https://qiita.com/ryo2132/items/3d0379e85c38a9a5b355

- https://qiita.com/fruitriin/items/3249bb24d60932bb42ee

#### テスト環境まわり

公式
- https://vue-test-utils.vuejs.org/ja/installation/#%E3%83%86%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E3%83%8A%E3%82%92%E9%81%B8%E3%81%B6

その他
- https://qiita.com/kskinaba/items/d23259060e6e13b7353c

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
