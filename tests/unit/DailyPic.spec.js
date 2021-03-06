import { shallowMount, mount } from "@vue/test-utils";
import DailyPic from "@/views/DailyPic.vue";

describe('DailyPic', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(DailyPic)
    expect(wrapper.isVueInstance()).toBeTruthy()
  });
  it('renders correctly', () => {
    const wrapper = mount(DailyPic)
    expect(wrapper.element).toMatchSnapshot()
  });
});

   