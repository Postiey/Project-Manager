import React from 'react'
import ReactDOM from 'react-dom'

import Homepage from './pages/Homepage.jsx'

const App = () => {
  return (
    <>
        <Homepage />
        <h1>Hello</h1>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));