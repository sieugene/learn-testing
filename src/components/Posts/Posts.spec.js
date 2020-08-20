import React from 'react'
import Posts from './Posts';
import { shallow, render } from 'enzyme';

//snapshot, если требуется обновить, то yarn test -u

describe("Posts component",() => {
    // it("should render Post", () => {
    //     const component = shallow(<Posts/>)
    //     expect(component).toMatchSnapshot();
    // })
    //с методом render иначе выглядит снапшот
    it("should render Post2", () => {
        const component = render(<Posts/>)
        expect(component).toMatchSnapshot();
    })
})
