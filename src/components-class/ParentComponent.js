import React from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parentValue: ''
    }
  }
  render() {
    console.log('ParentComponent render')
    const { parentValue } = this.state
    return (
      <div>
        ParentComponent
        <button onClick={() => {
          console.log('a 추가 click!')
          this.setState({
            parentValue: parentValue + 'a'
          })
        }}>
          값에 a 추가
        </button>
        <button onClick={() => {
          console.log('그대로 click!')
          this.setState({
            parentValue
          })
        }}>
          값 그대로
        </button>
        <ChildComponent parentValue={parentValue} />
      </div>
    )
  }
}

export default ParentComponent
