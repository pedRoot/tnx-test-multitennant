import React from 'react'

const Show = (props) => {
  return (
    <div>
      Detail a user to {props.match.params.id ? 'Edit' : 'Create'}
    </div>
  )
}

export default Show
