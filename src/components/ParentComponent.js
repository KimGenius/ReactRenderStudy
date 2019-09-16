import React, { useState, useEffect } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  const [parentValue, setParentValue] = useState('')
  useEffect(() => {
    console.log('ParentComponent render')
  })

  return (
    <div>
      ParentComponent
      <button onClick={() => {
        console.log('a 추가 click!')
        setParentValue(parentValue + 'a')
      }}>
        값에 a 추가
      </button>
      <button onClick={() => {
        console.log('그대로 click!')
        setParentValue(parentValue)
      }}>
        값 그대로
      </button>
      <ChildComponent parentValue={parentValue} />
    </div>
  )
}

export default ParentComponent
