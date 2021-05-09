import { shallowMount } from '@vue/test-utils'
import Counter from '../src/Counter.vue'

describe('init', () => {
  it('test greet', () => {
    const str = 'hello';
    expect(str).toMatch('hello');
  })
})

describe('Counter.vue', () => {
  const wrapper = shallowMount(Counter);
  it('increments count when button is clicked', async () => {
    await wrapper.find('button.btn-increment').trigger('click');

    await expect(wrapper.find('span.count-int').text()).toMatch('1');
  })

  it('count up when button is clicked', async () => {
    await wrapper.find('button.btn-countup-single').trigger('click');
    await expect(wrapper.find('span.number-int').text()).toMatch('1');

    await wrapper.find('button.btn-countup-twice').trigger('click');
    await expect(wrapper.find('span.number-int').text()).toMatch('3');

    await wrapper.find('button.btn-reset-count').trigger('click');
    await expect(wrapper.find('span.number-int').text()).toMatch('0');
  })
})
