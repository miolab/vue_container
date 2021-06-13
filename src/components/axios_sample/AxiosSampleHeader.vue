<template>
  <section>
    <h1>{{ titleHeader | myFilterUpperCase }}</h1>
    <p>
      {{ headerDescription }}
      <span style="font-size: 0.8em;">（←{{ textLength }}文字）</span>
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titleHeader: 'Bitcoin Price Index'
    }
  },
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
