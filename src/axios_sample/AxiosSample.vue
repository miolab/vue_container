<template>
  <div>
    <h1>Bitcoin Price Index</h1>
    <div
      v-for="item in items"
      v-bind:key="item"
      class="item"
    >
      {{ item.description }}
    </div>
    <hr>
    <div>
      <p><strong>raw data</strong></p>
      {{ items }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AxiosSample',
  data() {
    return {
      items: null
    }
  },
  mounted() {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => (this.items = response.data.bpi))
  }
}
</script>
