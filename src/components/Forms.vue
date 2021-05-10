<template>
  <div id="forms">
    <input
      class="input-text"
      type="text"
      v-model="message"
    >
    <p>入力結果:
      <span class="show-input-text">{{ message }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  data() {
    return {
      message: ''
    }
  }
}
</script>
