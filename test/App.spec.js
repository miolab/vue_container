import { shallowMount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('init test', () => {
  it('init test', () => {
    const str = 'test';
    expect(str).toMatch('test');
  })
})
