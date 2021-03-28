import { shallowMount } from '@vue/test-utils'
import Counter from '../src/Counter.vue'

describe('init', () => {
  it('test greet', () => {
    const str = 'hello';
    expect(str).toMatch('hello');
  })
})

// describe('Counter.vue', () => {
//   it('counter test', () => {
//     const wrapper = shallowMount(Counter);
//     wrapper.find('button').trigger('click');
//     expect(wrapper.find('p#js-count').text()).toMatch('1');
//   })
// })
