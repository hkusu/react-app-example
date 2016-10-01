/* @flow */
// noinspection JSUnresolvedVariable
import React, { Component } from 'react'

class NotFound extends Component {
  static defaultProps: {
    message: string,
  } = {
    message: 'ページが見つかりません',
  }

  props: {
    message: string,
  }

  render(): any {
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <p style={{ opacity: 0.6 }}>
          {this.props.message}
        </p>
      </div>
    )
  }
}

export default NotFound
