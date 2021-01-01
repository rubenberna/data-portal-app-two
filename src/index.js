import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  addButton,
  button,
  buttonsContainer,
  container,
  subtractButton
} from './_styles'
import logo from 'adn-brands.svg'

const Component = (props) => {
  const [count, setCount] = useState(0)
  const { state } = props

  return (
    <div style={container}>
      {state?.username && <h4>Hello {state.username}!</h4>}
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
  libraryPath: '@data-portal/app-two',
  icon: logo
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

export { Component as default, metadata }
