import { shallowMount } from "@vue/test-utils";
import Vue from 'vue';
import NumStepper from '@/components/NumStepper';
import NumberDisplay from '@/components/NumberDisplay';

describe("测试 NumStepper 组件", ()=>{
  it("应该能够影响外层组件的数据", ()=>{

    const display = shallowMount(NumberDisplay);

    const wrapper = shallowMount(NumStepper, {
      propsData: {
        targetData: display.vm.somedata,
        clear: display.vm.clear
      }
    });

    expect(display.vm.somedata.num).toBe(999);

    wrapper.find('.plus').trigger('click');
    wrapper.find('.plus').trigger('click');
    expect(display.vm.somedata.num).toBe(1001);

    wrapper.find('.minus').trigger('click');
    expect(display.vm.somedata.num).toBe(1000);

    wrapper.find('.zero').trigger('click');
    expect(display.vm.somedata.num).toBe(0);
  })
});
