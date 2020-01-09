import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    count: 0,
  }

  handleCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <button
          type='submit'
          data-testid='counter-button'
          onClick={this.handleCount}
        >
          {count}
        </button>
      </div>
    )
  }
}
