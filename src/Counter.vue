<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">oshitara-kazuga-fuemasu</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
