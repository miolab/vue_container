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

    await expect(wrapper.find('div').text()).toMatch('1');
  })
})
