<template>
  <div>
    {{ items }}
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
