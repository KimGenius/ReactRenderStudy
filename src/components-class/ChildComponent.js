import React from 'react'

class ChildComponent extends React.Component {
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
