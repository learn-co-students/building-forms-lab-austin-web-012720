import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

function addBand(newBand) {
  return {
    type: 'ADD_BAND',
    payload: newBand
  }
}

class BandsContainer extends Component {

  renderBands = () => {
    console.log(this.props.bands);
    return this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)
  }

  render() {
    
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (newBand) => {
      dispatch(addBand(newBand))
    }
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
