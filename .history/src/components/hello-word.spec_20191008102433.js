import { shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld';
import { exportAllDeclaration } from '@babel/types';

describe('<HelloWorld>',() =>{
  it('should render correct contents',()=>{
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.find('.hello h1').text()).toEqual('welcome to your vue.js App')
  })

})