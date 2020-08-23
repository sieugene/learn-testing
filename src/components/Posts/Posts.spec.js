import React from 'react'
import Posts from './Posts';
import { shallow, render } from 'enzyme';

//snapshot, если требуется обновить, то yarn test -u

const setup = (props) => shallow(<Posts {...props}/>)

describe("Posts component",() => {
    const DEFAULT_PAGE = 10;
    let component;
    let instance;
    beforeEach(() => {
        component = setup();
        instance = component.instance()
    })
    // it("should render Post", () => {
    //     const component = shallow(<Posts/>)
    //     expect(component).toMatchSnapshot();
    // })
    //с методом render иначе выглядит снапшот
    it("should render Post2", () => {
        expect(component).toMatchSnapshot();
    })
    describe("Posts handler", () => {
        it("should handle search input value", () => {
            expect(component.state().searchQuery).toBe('')
            instance.handleInputChange({target:{value: 'test'}});
            expect(component.state().searchQuery).toBe('test')
        })
        it("should handle change hits per page", () => {
            expect(component.state().hitsPerPage).toBe(20)
            instance.handleHitsChange({target:{value: String(DEFAULT_PAGE)}});
            expect(component.state().hitsPerPage).toBe(DEFAULT_PAGE)
        })
        it("should handle change page if clicked 'enter' ", () => {
            instance.setState({page: DEFAULT_PAGE})
            expect(component.state().page).toBe(DEFAULT_PAGE)
            instance.getSearch({key: "Enter"})
            expect(component.state().page).toBe(0)
        })
        it("should not handle change page if clicked another button ", () => {
            instance.setState({page: DEFAULT_PAGE})
            expect(component.state().page).toBe(DEFAULT_PAGE)
            instance.getSearch({key: "a"})
            expect(component.state().page).toBe(DEFAULT_PAGE)
        })
    })
})
