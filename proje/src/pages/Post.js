import React from 'react'

const Post = ({match}) => {
  return (
    <div>
        <h2>Post name: {match.params.name}</h2>
    </div>
  )
}

export default Post;

------------------------------------DERS 2,12---------------------------------------------