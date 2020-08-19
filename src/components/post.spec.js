import React from "react";
import { shallow } from "enzyme";
import Post from "./post";

const setup = (props) => shallow(<Post {...props}/>)

describe("should render Post Component", () => {
    let component;
    //beforeEach присваивание перед каждым тестом
    beforeEach(() => {
        component = setup();
    })
  it("should contain post wrapper", () => {
    //const component = setup();
    const wrapper = component.find(".post");
    //должен встречаться один раз проверка
    expect(wrapper.length).toBe(1);
    //console.log(component.debug())
  });
  it("should exist a tag", () => {
    const wrapper = component.find("a");
    expect(wrapper.length).toBe(1);
  });
  it("should render created date", () => {
    const created_at = "19-08-2020"
    component = setup({created_at})
    const date = component.find(".date");
    expect(date.text()).toBe(new Date(created_at).toLocaleDateString());
  });
});
