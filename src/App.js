import React from 'react'

import CommentList from './CommentList'
import CommentBox from './CommentBox'

const App = props => {
  return (
    <div>
      <CommentList />
      <CommentBox />
    </div>
  );
}

export default App