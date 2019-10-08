import { shallowMount } from "@vue/test-utils";
import Vue from 'vue';
import NumStepper from '@/components/NumStepper2';

describe("测试 NumStepper 组件", ()=>{
  it("应该能够影响外层组件的数据", ()=>{

    const obj = {
      func1: function(){},
      func2: function(){}
    };

    const spy1 = jest.spyOn(obj, "func1");
    const spy2 = jest.spyOn(obj, "func2");

    const wrapper = shallowMount(NumStepper, {
      propsData: {
        updateFunc: spy1,
        clearFunc: spy2
      }
    });

    wrapper.find('.plus').trigger('click');
    expect(spy1).toHaveBeenCalled();

    wrapper.find('.minus').trigger('click');
    expect(spy1).toHaveBeenCalled();

    wrapper.find('.zero').trigger('click');
    expect(spy2).toHaveBeenCalled();
  })
});
