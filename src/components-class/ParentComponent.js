import React from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parentValue: ''
    }
  }
  // 해당 코드가 있으면 자식 컴포넌트에서도 render가 일어나지 않음
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.parentValue !== nextState.parentValue
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
