import React from 'react'

class ChildComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.parentValue !== nextProps.parentValue
  }

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
