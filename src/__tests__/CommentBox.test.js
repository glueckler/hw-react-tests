import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

// it's important to clean up the DOM when using mount
// since the same DOM is used across tests
afterEach(() => {
  wrapped.unmount()
})

it('should display a textarea and a button', () => {
  // we are going to use a full dom render only for learning purposes
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})
