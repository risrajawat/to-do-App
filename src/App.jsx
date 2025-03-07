import React from 'react'
import Todo from './components/Todo'

const App = () => {
  return (
    <>
    <div className='min-h-screen grid py-4' style={{backgroundColor: "#1C1F29"}}>
      <Todo/>
    </div>
    </>
  )
}

export default App