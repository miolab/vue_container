# Vue.js Mock

* __Vue.js__（vue/cli 4系）開発環境を、`docker-compose`で構築

  <img width="600" alt="vue" src="https://user-images.githubusercontent.com/33124627/77903090-4463d480-72bd-11ea-86c6-c62023bfa3f0.png">

* バージョン

    ```
    # vue --version
    @vue/cli 4.2.3

    # npm --version
    6.14.4
    ```


## Usage

* 以下、

  * `$ ... `はTerminalでの操作

  * `/usr/src/app # ... `はDockerコンテナ内での操作

  です。

* `/usr/src/app # vue create .` 実行時の設定は、各人お好みでどうぞ。


### ビルド・起動

```
$ git clone https://github.com/miolab/vue_trial.git
Cloning into 'vue_trial'...
remote: Enumerating objects: 36, done.
remote: Counting objects: 100% (36/36), done.
remote: Compressing objects: 100% (28/28), done.
remote: Total 36 (delta 7), reused 30 (delta 4), pack-reused 0
Unpacking objects: 100% (36/36), 90.10 KiB | 339.00 KiB/s, done.
```

```
$ cd vue_trial/
```

```
$ docker-compose build
Building app
Step 1/3 : FROM node:12.12.0-alpine
 ---> 0fcfd7e52b09
Step 2/3 : WORKDIR /usr/src/app
 ---> Using cache
 ---> 0b80d4a4d6e4
Step 3/3 : RUN apk update &&     npm install -g npm @vue/cli
 ---> Using cache
 ---> 26860c88aac8
Successfully built 26860c88aac8
Successfully tagged vue_trial_app:latest
```

```
$ docker-compose up -d
Creating vue_trial_app_1 ... done
```

```
$ docker-compose exec app sh
```

```
/usr/src/app # vue --version
@vue/cli 4.2.3
```

```
/usr/src/app # vue create .


Vue CLI v4.2.3
? Generate project in current directory? Yes


Vue CLI v4.2.3
? Please pick a preset: default (babel, eslint)
? Pick the package manager to use when installing dependencies: NPM


Vue CLI v4.2.3
✨  Creating project in /usr/src/app.
⚙️  Installing CLI plugins. This might take a while...


> yorkie@2.0.0 install /usr/src/app/node_modules/yorkie
> node bin/install.js

setting up Git hooks
done


> core-js@3.6.4 postinstall /usr/src/app/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> ejs@2.7.4 postinstall /usr/src/app/node_modules/ejs
> node ./postinstall.js

added 1236 packages from 869 contributors and audited 25486 packages in 113.435s

42 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

🚀  Invoking generators...
📦  Installing additional dependencies...

audited 25486 packages in 25.49s

42 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project app.
👉  Get started with the following commands:

 $ npm run serve

```

```
/usr/src/app # npm run serve
```

サーバーが立ち上がったら、[http://0.0.0.0:8080/](http://0.0.0.0:8080/)で確認します。


### 停止

* コンテナから抜けて、コンテナ停止は以下
    ```
    /usr/src/app # exit
    ```

    ```
    $ docker-compose stop
    Stopping vue_trial_app_1 ... done

    ```

* コンテナやイメージをまとめて全削除
    ```
    $ docker-compose down --rmi all --volumes
    ```

    ```
    $ cd ../
    ```

    ```
    $ rm -rf vue_trial/
    ```


---

## 実行環境

| | バージョン |
|:--|:--|
| Mac | |
| Docker | 19.03.8 |
| Docker-compose | 1.25.4 |


---

## ディレクトリ構成

```
$ tree -L 2
.
├── README.md
├── babel.config.js
├── docker
│   └── Dockerfile
├── docker-compose.yml
├── node_modules
│   ├── ...
│   └── ...
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.vue
    ├── assets
    ├── components
    └── main.js
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
