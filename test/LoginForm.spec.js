import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm'

const vueInstance = mount(LoginForm)

describe('LoginForm', () => {

  test('it is a Vue Instance', () => {
    expect(vueInstance.vm).toBeTruthy()
  })

  test('it has a form tag', () => {
    expect(vueInstance.find('form').element.tagName).toEqual('FORM');
  })

  test('it has data function', () => {
    expect(typeof LoginForm.data).toBe('function')
  })

  test('it has a v-text-field vuetify tag', () => {
    expect(vueInstance.find('v-text-field').element.tagName).toEqual('V-TEXT-FIELD')
  })

  test('it has a component data prop email', () => {
    expect(vueInstance.vm.$data.email).toEqual('')
  })

  test('it has a component data prop password', () => {
    expect(vueInstance.vm.$data.password).toEqual('')
  })

  test('it has methods function', () => {
    expect(typeof LoginForm.methods).toBe('object')
  })

  test('it has in methods the function loginClickHandler', () => {
    expect(typeof LoginForm.methods.loginClickHandler).toBe('function')
  })

  test('it has computed object', () => {
    expect(typeof LoginForm.computed).toBe('object')
  })

})
