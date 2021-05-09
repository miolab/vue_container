<template>
  <div>
    <div>
      <p>例（@click） {{ count }}</p>
      <button @click="increment">oshitara-kazuga-fuemasu</button>
    </div>
    <div>
      <p>例（v-on:click） {{ number }}</p>
      <p>
        <button v-on:click="countUp(1)">Count Up (1n)</button>
        <button v-on:click="countUp(2)">Count Up (2n)</button>
      </p>
      <p>
        <button
          v-on:click="resetCount"
          v-on:mouseover="showDescription"
          v-on:mouseleave="removeDescription"
        >
          Reset Count<span v-if="isMouseover"> (hover test)</span>
        </button>
      </p>
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
      isMouseover: false,
    }
  },
  methods: {
    increment() {
      this.count++
    },
    countUp: function(times) {
      this.number += 1 * times
    },
    resetCount: function() {
      this.number = 0
      this.count = 0
    },
    showDescription() {
      this.isMouseover = true
    },
    removeDescription() {
      this.isMouseover = false
    }
  }
}
</script>
