// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  onHandleChange = e => {
    this.setState({name: e.target.value})
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <label htmlFor="name">Band Name</label>
          <br></br>
          <input type="text" name="name" onChange={this.onHandleChange}></input>
          <br></br>
          <button type="submit">Submit Me</button>
        </form>
      </div>
    )
  }
}

export default BandInput
