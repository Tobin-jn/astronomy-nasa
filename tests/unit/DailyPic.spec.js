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

  // it('should get the date in the correct format', () => {
  //   let today = Date
  //   Date = jest.fn().mockImplementation(() => { return '2019-01-09T17:31:27.301Z'})
  //   today.getFullYear = jest.fn().mockImplementation(() => { return '2019'})
    
  //   const wrapper = mount(DailyPic)
  //   expect(wrapper.vm.getDay()).toEqual('')
  // });
});

   