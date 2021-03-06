import React from 'react'

export const focus = (Component, Span = 'span') => {
  return class Focus extends React.Component {
    state = { focus: false }
    handleFocus= () => this.setState({ focus: true })
    handleBlur = () => this.setState({ focus: false })

    render = () => (
      <Span onFocus={ this.handleFocus } onBlur={ this.handleBlur }>
        <Component { ...this.props } { ...this.state } />
      </Span>
    )
  }
}

export default focus
