import { shallowMount, mount } from "@vue/test-utils";
import MonthlyPics from "@/views/MonthlyPics.vue";

describe('MonthlyPics', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MonthlyPics)
    expect(wrapper.isVueInstance()).toBeTruthy()
  });
  test('renders correctly', () => {
    const wrapper = mount(MonthlyPics)
    expect(wrapper.element).toMatchSnapshot()
  });
});