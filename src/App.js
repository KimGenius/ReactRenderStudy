import React from 'react'
import ClassParentComponent from './components-class/ParentComponent'
import HooksParentComponent from './components/ParentComponent'
function App() {
  return (
    <div>
      <div style={{ marginBottom: '3vh' }}>
        Class
        <ClassParentComponent />
      </div>
      <div style={{ marginBottom: '3vh' }}>
        Hooks
        <HooksParentComponent />
      </div>
    </div>
  )
}

export default App;
