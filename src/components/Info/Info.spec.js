import React from "react";
import { shallow } from "enzyme";
import Info from "./Info";

const setup = () => shallow(<Info />);

const componentDidMountSpy = jest.spyOn(Info.prototype, "componentDidMount");
const componentDidUpdateSpy = jest.spyOn(Info.prototype, "componentDidUpdate");
const componentWillidUnmountSpy = jest.spyOn(
  Info.prototype,
  "componentWillUnmount"
);
describe("Input component", () => {
  let component;
  beforeEach(() => {
    jest.spyOn(window, "addEventListener");
    jest.spyOn(window, "removeEventListener");
    component = setup();
  });
  afterEach(() => {
    window.addEventListener.mockRestore();
    window.removeEventListener.mockRestore();
  });
  it("should render", () => {
    expect(component).toMatchSnapshot();
  });
  describe("Lifecycle methods", () => {
    it("should call componentDidMount once", () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(2);
    });
    it("should not call componentWillUnmount when mounting", () => {
      expect(componentWillidUnmountSpy).toHaveBeenCalledTimes(0);
    });
    it("should call componentDidUpdate", () => {
      component.setProps();
      expect(componentDidUpdateSpy).toHaveBeenCalled();
    });
    it("should call componentWillUnmount", () => {
      component.unmount();
      expect(componentWillidUnmountSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe("Component handlers", () => {
      it("should call handleChangeTitle when mount", () => {
          expect(window.addEventListener).toHaveBeenCalledTimes(1)
      })
      it("should call handleChangeTitle when didUpdate", () => {
          const instance = setup().instance()
          instance.handleChangeTitle = jest.fn()
          instance.componentDidUpdate()
          expect(instance.handleChangeTitle).toHaveBeenCalled()
      })
      it("should call removeEventListener when unMount", () => {
        component.unmount()
        expect(window.removeEventListener).toHaveBeenCalledTimes(1)
    })
      it("should change window width", () => {
        expect(component.state().width).toBe(0)
        global.dispatchEvent(new Event('resize'))
        expect(component.state().width).toBe(window.innerWidth )
      })
  })
});
