import {saveComment} from 'actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case saveComment: 
      return [...state, action.payload]
    default:
      return state
  }
}
