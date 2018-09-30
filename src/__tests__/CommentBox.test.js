import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
  // we are going to use a full dom render only for learning purposes
  wrapped = mount(<CommentBox />)
})

// it's important to clean up the DOM when using mount
// since the same DOM is used across tests
afterEach(() => {
  wrapped.unmount()
})

it('should display a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

it('has a working textarea', () => {
  // simulate an onChange event
  // use the vanilla event type in the simulate function
  wrapped
    .find('textarea')
    .simulate('change', { target: { value: 'new comment' } })
  // rerender will happen async, force update
  wrapped.update()
  expect(wrapped.find('textarea').prop('value')).toBe('new comment')
})
