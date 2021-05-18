<template>
  <div class="hello">
    <Forms></Forms>
    <hr>
    <div id="counter"></div>
    <hr>
    <div id="axios-sample"></div>

    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <!-- v-bind例 -->
      <a v-bind:href="urlCli" target="_blank" rel="noopener">vue-cli documentation</a>.
      <!-- NOTE: :href="urlCli" のように、`v-bind`は省略も可 -->
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <template v-for="(val, index) in urlsCliPlugins">
        <li :key="val">
          {{ index + 1 }}. <a :href="val.href" target="_blank" rel="noopener">{{ val.serviceName }}</a>
        </li>
      </template>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <!-- v-bind例（href, target, relのセットをオブジェクト化してv-bindで適用させる）-->
      <li><a v-bind="urlVuejsOrg">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li v-for="val in urlsEcosystem" :key="val">
        <a :href="val.href" target="_blank" rel="noopener">{{ val.serviceName }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      urlsCliPlugins: [
        {
          serviceName: "babel",
          href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
        },
        {
          serviceName: "eslint",
          href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
        }
      ],
      urlsEcosystem: [
        {serviceName: "vue-router", href: "https://router.vuejs.org"},
        {serviceName: "vuex", href: "https://vuex.vuejs.org"},
        {
          serviceName: "vue-devtools",
          href: "https://github.com/vuejs/vue-devtools#vue-devtools"
        },
        {serviceName: "vue-loader", href: "https://vue-loader.vuejs.org"},
        {serviceName: "awesome-vue", href: "https://github.com/vuejs/awesome-vue"}
      ],
      // v-bind例
      urlCli: 'https://cli.vuejs.org',
      urlVuejsOrg: {
        href: "https://vuejs.org",
        target: "_blank",
        rel: "noopener"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
