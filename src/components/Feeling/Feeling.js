import React, { Component } from 'react';
import Steps from '../Steps/Steps';
import Rating from 'react-rating';
import './Feeling.css';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';

class Feeling extends Component {

  state = {
    feeling: 0
  }

  handleNext = (event) => {
    this.props.dispatch({type: 'ADD_FEELING', payload: this.state.feeling});
    this.props.history.push('/2');
  }

  handleStarClick = (value) => {
    this.setState({ feeling: value });
  }

  render() {

    return (
      <div>
        <Steps step={"1"} />
        <h2>How are you feeling today?</h2>

        <Rating
          initialRating={this.state.feeling}
          onClick={this.handleStarClick}
          emptySymbol={<StarBorder />}
          fullSymbol={<Star />}
        />
        <button onClick={this.handleNext}>Next</button>
        {JSON.stringify(this.state.feeling)}
      </div>
    );
  }
}

export default connect()(Feeling);