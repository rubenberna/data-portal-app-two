import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  button,
  buttonsContainer,
  container,
  addButton,
  subtractButton
} from './_styles'

const Component = ({ state }) => {
  const [count, setCount] = useState(0)

  return (
    <div style={container}>
      { state?.username && <h4>Hello {state.username}!</h4>}
      <h3>Current count: {count}</h3>
      <div style={buttonsContainer}>
        <button style={addButton} onClick={() => setCount(count + 1)}>
          Add
        </button>
        <button style={subtractButton} onClick={() => setCount(count - 1)}>
          Subtract
        </button>
      </div>
    </div>
  )
}

const metadata = {
  title: 'Counter',
  requiredPermissions: ['Guest'],
  description: 'Simple counter',
  icon: ''
}

Component.propTypes = {
  state: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
    username: PropTypes.string,
    role: PropTypes.string,
    errorMessage: PropTypes.string
  })
}

export  { Component as default, metadata }
