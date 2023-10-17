/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  This files was created to show the error message to user when application/component getting error on loading and rendering.
  Error Boundaries basically provide some sort of boundaries or checks on errors.
  They are React components that are used to handle JavaScript errors in their child component tree
*/

import React from 'react'
import PropTypes from 'prop-types'
import { Cancel as CancelIcon } from '@mui/icons-material'
import './ErrorBoundary.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { error, errorInfo } = this.state
    const { children } = this.props

    if (errorInfo) {
      return (
        <div className="errorboundary">
          <div className="errorboundary__container">
            <span className="errorboundary__logo"></span>
            <span className="errorboundary__header">
              <span className="errorboundary__erroricon">
                <CancelIcon />
              </span>
              <span className="errorboundary__title">Something went wrong</span>
            </span>
            <span className="errorboundary__message">
              {error && error.message}
            </span>
            <details
              open
              className="errorboundary__details"
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <div className="errorboundary__summary">
                <summary>{error && error.toString()}</summary>
                <p>{errorInfo.componentStack}</p>
              </div>
            </details>
          </div>
        </div>
      )
    }

    return children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ErrorBoundary
