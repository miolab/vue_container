# Vue.js Mock

[![miolab](https://circleci.com/gh/miolab/vue_trial.svg?style=svg)](https://github.com/miolab/vue_trial)

* __Vue.js__（4系）開発環境を、`docker-compose`で構築。

  <img width="600" alt="vue" src="https://user-images.githubusercontent.com/33124627/77903090-4463d480-72bd-11ea-86c6-c62023bfa3f0.png">

* バージョン

  ```sh
  $ docker-compose exec app sh -c "node --version && vue --version"

  v14.16.0
  @vue/cli 4.5.11
  ```

## Usage

* 以下コード中、
  * `$ ... `はTerminalでの操作。
  * `# ... `はDockerコンテナ内での操作。
* `# vue create .` 実行時の設定は任意で。

### ビルド・起動

* ビルド

  ```sh
  $ git clone https://github.com/miolab/vue_trial.git

  $ cd vue_trial

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

### Vue開発環境構築（例）

```sh
# vue create .

?  Your connection to the default yarn registry seems to be slow.
   Use https://registry.npm.taobao.org for faster installation? No


Vue CLI v4.5.11
? Generate project in current directory? Yes


Vue CLI v4.5.11
? Please pick a preset: Default ([Vue 2] babel, eslint)
? Pick the package manager to use when installing dependencies: NPM


Vue CLI v4.5.11
✨  Creating project in /usr/src/app.
⚙️  Installing CLI plugins. This might take a while...


> yorkie@2.0.0 install /usr/src/app/node_modules/yorkie
> node bin/install.js

setting up Git hooks
done


> core-js@3.9.1 postinstall /usr/src/app/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> ejs@2.7.4 postinstall /usr/src/app/node_modules/ejs
> node ./postinstall.js

added 1258 packages from 947 contributors and audited 1261 packages in 154.604s

69 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

🚀  Invoking generators...
📦  Installing additional dependencies...

added 53 packages from 36 contributors and audited 1314 packages in 30.346s

74 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project app.
👉  Get started with the following commands:

 $ npm run serve

```

* サーバー起動（サンプル表示） `npm run serve`

  ```sh
  $ docker-compose exec app npm run serve

  > app@0.1.0 serve /usr/src/app
  > vue-cli-service serve

  INFO  Starting development server...
  98% after emitting CopyPlugin

  DONE  Compiled successfully in 14059ms


    App running at:
    - Local:   http://localhost:8080/

    It seems you are running Vue CLI inside a container.
    Access the dev server via http://localhost:<your container's external mapped port>/

    Note that the development build is not optimized.
    To create a production build, run npm run build.
  ```

  サーバーが立ち上がったら、[http://0.0.0.0:8080/](http://0.0.0.0:8080/)で確認。

---

### アプデ等で環境がおかしくなったら

* `$ docker-compose run --rm app npm rebuild` 試す。

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

# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
