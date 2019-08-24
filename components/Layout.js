import React from 'react'
import PropTypes from 'prop-types'

export function Layout (props) {
  return (
    <div id='page'>
      {props.children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}
