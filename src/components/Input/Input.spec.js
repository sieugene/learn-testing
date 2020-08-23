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
