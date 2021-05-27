<template>
  <div id="forms">
    <p>フォーム</p>
    <input
      class="input-text"
      type="text"
      v-model="message"
    >
    <p>入力結果:
      <span class="show-input-text">{{ message }}</span>
    </p>
    <p>バリデーション付きフォーム（v-model.Lazy）</p>
    <input
      type="text"
      v-model.lazy="messageByLazy"
    >
    <span>（{{ maxTextLimit }}文字以内）</span>
    <p>入力結果:
      <span class="show-input-text">{{ messageByLazy }}</span>
      <span style="color: red;"> {{ messageLimitAlert }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  data() {
    return {
      message: '',
      messageByLazy: '',
      maxTextLimit: 8
    }
  },
  computed: {
    messageLimitAlert() {
      return this.messageByLazy.length >= this.maxTextLimit ?
        String(this.maxTextLimit) + '文字未満にしてください' :
        ''
    }
  }
}
</script>
