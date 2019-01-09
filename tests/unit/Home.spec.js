import { shallowMount, mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe('Home', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Home)
    expect(wrapper.isVueInstance()).toBeTruthy()
  });
  it('renders correctly', () => {
    const wrapper = mount(Home)
    expect(wrapper.element).toMatchSnapshot()
  });
});