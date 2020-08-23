import React from 'react'
import Input from './Input'
import { shallow } from 'enzyme';

describe(("Input component"), () => {
    it("should test", () => {
        const component = shallow(<Input/>)
        expect(component).toMatchSnapshot();
    })
    describe("default props", () => {
        it("should use default props onChange", () => {
            const result = Input.defaultProps.onChange();
            expect(result).toBe(undefined)
        })
        it("should call onChange method", () => {
            //способ с моками
            const mockCallBack = jest.fn()
            const component = shallow(<Input onChange={mockCallBack}/>)
            expect(mockCallBack.mock.calls.length).toEqual(0)
            component.find('.input').simulate('change')
            expect(mockCallBack.mock.calls.length).toEqual(1)
        }) 
        it("should use default props onKeyPress", () => {
            const result = Input.defaultProps.onKeyPress();
            expect(result).toBe(undefined)
        })
        it("should use default props value", () => {
            const result = Input.defaultProps.value;
            expect(result).toBe("")
        })
    })
})
