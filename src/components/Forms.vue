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
      v-model.trim.lazy="messageByLazy"
    >
    <span>（{{ maxTextLimit }}文字以内）</span>
    <p>入力結果:
      <span class="show-input-text">{{ messageByLazy }}</span>
      <span style="color: red;"> {{ messageLimitAlert }}</span>
    </p>
    <section class="single-checkbox">
      <input
        type="checkbox"
        id="single-checkbox-input"
        v-model="checkboxEventData.isChecked"
      >
      <label for="single-checkbox-input"> チェックする（単体チェックボックス）</label>
      <p>{{ checkboxEventData.isChecked }}</p>
    </section>
    <section class="multiple-checkbox">
      <p>
        （複数チェックボックス）
        <input
          type="checkbox"
          id="checkbox-soccer"
          value="soccer"
          v-model="checkboxEventData.favboriteSports"
        >
        <label for="checkbox-soccer">サッカー</label>
        <input
          type="checkbox"
          id="checkbox-running"
          value="running"
          v-model="checkboxEventData.favboriteSports"
        >
        <label for="checkbox-running">ランニング</label>
        <input
          type="checkbox"
          id="checkbox-swimming"
          value="swimming"
          v-model="checkboxEventData.favboriteSports"
        >
        <label for="checkbox-swimming">水泳</label>
      </p>
      <p class="favorite-sports-result">{{ checkboxEventData.favboriteSports }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  data() {
    return {
      message: '',
      messageByLazy: '',
      maxTextLimit: 8,
      checkboxEventData: {
        isChecked: false,
        favboriteSports: []
      }
    }
  },
  computed: {
    messageLimitAlert() {
      return this.messageByLazy.length > this.maxTextLimit ?
        String(this.maxTextLimit) + '文字以内にしてください' :
        ''
    }
  }
}
</script>
