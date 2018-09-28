import React from 'react'
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'

import App from '../App'
import CommentBox from '../CommentBox'

it('shows a comment box', () => {
  const wrapped = shallow(<App />)

  // find returns an array of each instance that was found..
  // there should be exactly one in this example
  expect(wrapped.find(CommentBox).length).toEqual(1)
  
})