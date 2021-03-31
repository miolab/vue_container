import { shallowMount } from '@vue/test-utils'
import Counter from '../src/Counter.vue'

describe('init', () => {
  it('test greet', () => {
    const str = 'hello';
    expect(str).toMatch('hello');
  })
})

describe('Counter.vue', () => {
  it('increments count when button is clicked', async () => {
    const wrapper = shallowMount(Counter);
    await wrapper.find('button').trigger('click');

    await expect(wrapper.find('div').text()).toMatch('1');
  })
})
