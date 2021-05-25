<template>
  <div>
    <p>+2ずつ数値が変化: {{ twiceIncrementedNumber }}</p>
    <button v-on:click="incrementDouble">2ずつ増やす</button>
  </div>
</template>

<script>
export default {
  props: {
    twiceIncrementedNumber: Number
    // twiceIncrementedNumber: [String, Number]
  },
  methods: {
    incrementDouble() {
      this.$emit('click-increment-twice', this.twiceIncrementedNumber + 2);
    }
  }
}
</script>
