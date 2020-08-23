import React from 'react'
import { shallow } from 'enzyme';
import CounterButton from './Counter';

const setup = (props) => shallow(<CounterButton/>)

describe("Counter component", () => {
    let component;
    let instance;
    beforeEach(() => {
        component = setup()
        instance = component.instance()
    })
    it("should render Counter component", () => {
        expect(component).toMatchSnapshot()
    }) 
    describe("Counter handlers", () => {
        it("should changecount value to plus one", () => {
            const btn = component.find('.plusOneBtn')
            btn.simulate('click')
            //expect(component).toMatchSnapshot()
            expect(component.state().count).toBe(1)
        }) 
        it("should reset count value to 10", () => {
            const btn = component.find('.resetBtn')
            btn.simulate('click')
            expect(component.state().count).toBe(10)
        }) 
        it("should reset count value to custom value", () => {
            instance.handleReset(20)
            expect(component.state().count).toBe(20)
        }) 
    })

})