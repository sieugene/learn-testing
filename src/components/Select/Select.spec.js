import React from "react";
import { shallow } from "enzyme";
import Select from "./Select";

const props = {
  options: [
    { value: "test", label: "test" },
    { value: "test2", label: "test2" },
  ],
  value: 0,
  handleChange: () => {},
};
const setup = (props) => shallow(<Select {...props} />);

describe("Select component", () => {
  describe("has props", () => {
    const component = setup(props);
    it("should render select component", () => {
      const select = component.find("select");
      expect(select).toHaveLength(1);
      // expect(component).toMatchSnapshot()
    });
    it("should render 2 option", () => {
      const select = component.find("option");
      expect(select).toHaveLength(2);
      // expect(component).toMatchSnapshot()
    });
  });
  describe("no has props", () => {
    const component = shallow(<Select />);
    it("should render placeholder", () => {
      const placeholder = component.find(".placeholder");
      expect(placeholder).toHaveLength(1);
    });
  });
  describe("default props", () => {
    it("should use default handleChange", () => {
      const result = Select.defaultProps.handleChange();
      expect(result).toBe(undefined)
    });
  });
});
