import { mount } from "@vue/test-utils";
import CreateEvent from "@/views/CreateEvent.vue";

describe("CreateEvent", () => {
  test("it has an <h1> heading", () => {
    const wrapper = mount(CreateEvent);

    expect(wrapper.contains("h1")).toBe(true);
  });

  test("title imput field", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.contains("input[value='Create'][type='submit']")).toBe(true);
  });

  test("shld contain an input field fo the title", () => {
    const wrapper = mount(CreateEvent);
    const titleInput = wrapper.get("input[name='title']");
    expect(titleInput.attributes("placeholder")).toBe("Add a title");
  });
});
