import React from 'react'
import { shallow } from 'enzyme';
import Button from './Button';
//проверка клика с помощью моков

describe("Button component", () => {
    it("should call onClick method", () => {
        const mockCallBack = jest.fn()
        const component = shallow(<Button onClick={mockCallBack}/>)
        expect(mockCallBack.mock.calls.length).toEqual(0)
        component.find('.btn').simulate('click')
        expect(mockCallBack.mock.calls.length).toEqual(1)
    }) 
})