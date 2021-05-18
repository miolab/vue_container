# テストについてメモ

## 実行

```sh
$ docker-compose exec app sh -c "yarn run test --watch"
```

- 特定ファイルだけテストしたい場合  
  `$ docker-compose exec app sh -c "yarn run test --watch Forms.spec.js"` のようにファイルを指定
- 自動化テストが不要で 1 回だけテスト実行したい場合は、`--watch`オプション不要

---

## テスト環境構築

#### まとめて準備する場合

```sh
$ docker-compose run --rm app sh -c "yarn add --dev jest @vue/test-utils vue-jest   babel-jest @babel-core @babel/preset-env babel-core@bridge jsdom jsdom-global"
```

#### 個別で準備する場合

- 1.

  ```sh
  $ docker-compose run --rm app yarn add --dev jest @vue/test-utils
  ```

  - `package.json` 編集

    ```json
      "scripts": {
        "serve": "vue-cli-service serve",
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint",
        "test": "jest" // <- add
      },
    ```

- 2.

  ```sh
  $ docker-compose run --rm app yarn add --dev vue-jest
  ```

  - `package.json` 編集

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

- 3.

  ```sh
  $ docker-compose run --rm app yarn add --dev babel-jest
  ```

  - `package.json` 編集

    ```json
        "transform": {
          ".*\\.(vue)$": "vue-jest",
          "^.+\\.js$": "<rootDir>/node_modules/babel-jest" // -> add
        },
    ```

  - 補記

    ```sh
    $ jest
    FAIL  test/Counter.spec.js
      ● Test suite failed to run

        Cannot find module 'babel-core'
    ```

    になるので、対処

    ```sh
    $ docker-compose run --rm app yarn add --dev babel-core babel-core@bridge
    ```

    ```sh
    $ docker-compose run --rm app yarn add --dev @babel/core @babel/preset-env
    ```

    DOM テスト用には、

    ```sh
    $ docker-compose run --rm app sh -c "yarn add --dev jsdom jsdom-global"
    ```

---

## 参考

公式

- https://vue-test-utils.vuejs.org/ja/installation/#%E3%83%86%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E3%83%8A%E3%82%92%E9%81%B8%E3%81%B6

その他

- https://qiita.com/kskinaba/items/d23259060e6e13b7353c
