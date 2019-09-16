import React from 'react'

class ChildComponent extends React.Component {
  // 부모 컴포넌트의 shouldComponentUpdate 에서 render를 막아주고 있어서
  // 밑의 코드는 없어도 자식 컴포넌트는 rerender가 일어나지 않음.
  // 만약 부모에서는 render를 하고 자식에서만 하지 않게 하려면 아래 주석 제거
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return this.props.parentValue !== nextProps.parentValue
  // }

  render() {
    console.log('ChildComponent render')
    const { parentValue } = this.props
    return (
      <div>
        ChildComponent <br/>
        {parentValue}
      </div>
    )
  }
}

export default ChildComponent
