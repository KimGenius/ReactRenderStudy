import React, { useEffect } from 'react'

function ChildComponent(props) {
  const { parentValue } = props
  useEffect(() => {
    console.log('ChildComponent render')
  })
  return (
    <div>
      ChildComponent <br/>
      {parentValue}
    </div>
  )
}

export default ChildComponent
