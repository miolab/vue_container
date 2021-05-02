<template>
  <div>
    <h1>Bitcoin Price Index</h1>
    <section>
      <ul>
        <div
          v-for="item in items"
          v-bind:key="item"
          class="item"
        >
          <li>
            <strong>
              {{ item.description }}
            </strong>
            <span class="lighten">
              <span v-html="item.symbol"></span>
              {{ item.rate_float | currencyDecimal }}
            </span>
          </li>
        </div>
      </ul>
      <hr>
      <div>
        <p><strong>raw data</strong></p>
        {{ items }}
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AxiosSample',
  data() {
    return {
      items: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {this.items = response.data.bpi})
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => {
      this.loading = false
    })
  },
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2)
    }
  }
}
</script>

<style scoped>
ul {
  display: inline-block;
  text-align: left;
  margin-top: 0;
}
</style>
