<template>
  <div>
    <div>
      <p>例（@click） {{ count }}</p>
      <button @click="increment">oshitara-kazuga-fuemasu</button>
    </div>
    <div>
      <p>例（v-on:click） {{ number }}</p>
      <button v-on:click="countUp">Count Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
      number: 0,
    }
  },
  methods: {
    increment() {
      this.count++
    },
    countUp: function() {
      this.number += 1
    }
  }
}
</script>
