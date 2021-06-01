import { shallowMount } from '@vue/test-utils'
import Forms from '../src/components/Forms.vue'

describe('Forms.vue', () => {
  const wrapper = shallowMount(Forms);

  it('inputへの入力textがv-modelを介した双方向バインディングにより表示される', async () => {
    const inputTextForm = wrapper.find('input.input-text');
    const spanShownText = wrapper.find('span.show-input-text');

    await inputTextForm.setValue('');
    await expect(spanShownText.text()).toMatch('');

    await inputTextForm.setValue('テストメッセージ');
    await expect(spanShownText.text()).toMatch('テストメッセージ');
  })

  it('単体checkboxにチェックを入れるとメッセージが変化する', async () => {
    const singleCheckbox = wrapper.find('input#single-checkbox-input');
    const singleCheckboxText = wrapper.find('section.single-checkbox p');
    await expect(singleCheckboxText.text()).toMatch('false');

    await singleCheckbox.setChecked(true);
    await expect(singleCheckboxText.text()).toMatch('true');
  })

  it('radioボタンを選択するとメッセージが変化する', async () => {
    const radioButtonNotAllow = wrapper.find('input#not-allow');
    const radioButtonAllow = wrapper.find('input#allow');
    const radioButtonText = wrapper.find('section.input-radio p');

    await radioButtonNotAllow.setChecked(true);
    await expect(radioButtonText.text()).toMatch('not_allow');

    await radioButtonAllow.setChecked(true);
    await expect(radioButtonText.text()).toMatch('allow');
  })
})
