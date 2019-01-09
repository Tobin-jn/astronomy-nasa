import { shallowMount, mount } from "@vue/test-utils";
import MonthlyPics from "@/views/MonthlyPics.vue";

describe('MonthlyPics', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(MonthlyPics)
    expect(wrapper.isVueInstance()).toBeTruthy()
  });
  it('renders correctly', () => {
    const wrapper = mount(MonthlyPics)
    expect(wrapper.element).toMatchSnapshot()
  });
  it('should return the date in the correct form', () => {
    const wrapper = mount(MonthlyPics)
    expect(wrapper.vm.getDay('2019-01-10')).toEqual('January 10, 2019')
  });
});