<template>
  <section>
    <h1>Bitcoin Price Index</h1>
    <p>
      {{ headerDescription }}
      <span style="font-size: 0.8em;">（←{{ textLength }}文字）</span>
    </p>
  </section>
</template>

<script>
export default {
  props: {
    headerDescription: String
  },
  computed: {
    textLength() {
      return this.headerDescription.length;
    }
  }
}
</script>
