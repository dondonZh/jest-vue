import { shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld';

describe('<HelloWorld>',() =>{
  it('should render correct contents',()=>{
    const wrapper = shallowMount(HelloWorld)
  })

})