import React, { Component } from 'react';
import Steps from '../Steps/Steps';
import Rating from 'react-rating';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

class Supported extends Component {
  state = {
    value: 0
  }

  handleClick = (value) => {
    this.setState({ value: value });
  }
  
  render() {
    return (
      <div>
        <Steps step={"3"} />
        <h2>How well are you being supported?</h2>
        <Rating
          initialRating={this.state.value}
          onClick={this.handleClick}
          emptySymbol={<StarBorder />}
          fullSymbol={<Star />}
        />
        <button>Next</button>
        {JSON.stringify(this.state.value)}
      </div>
    );
  }
}

export default Supported;