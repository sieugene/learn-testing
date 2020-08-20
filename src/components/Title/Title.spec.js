import React from 'react'
import { shallow } from 'enzyme';
import Title from './Title';

describe("Title component Render", () => {
    it("should render component with Props", () => {
        const component = shallow(<Title title={'test title'}/>)
        const wrap = component.find('.title')
        expect(wrap.text()).toBe('test title')
        expect(component).toMatchSnapshot()
    })
    it("should render component without Props", () => {
        const component = shallow(<Title/>)
        expect(component).toMatchSnapshot()
    })
})