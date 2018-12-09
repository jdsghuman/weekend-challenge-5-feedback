import React, { Component } from 'react';
import Steps from '../Steps/Steps';
import Rating from 'react-rating';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';

const styles = {
  largeIcon: {
    fontSize: '4rem'
  }
}

class Supported extends Component {
  state = {
    supported: 0
  }

  handleNext = (event) => {
    this.props.dispatch({type: 'ADD_SUPPORTED', payload: this.state.supported});
    this.props.history.push('/4');
  }

  handleStarClick = (value) => {
    this.setState({ supported: value });
  }

  render() {
    return (
      <div>
        <Steps step={"3"} />
        <h2>How well are you being supported?</h2>
        {/* Star rating */}
        <Rating
          initialRating={this.state.supported}
          onClick={this.handleStarClick}
          emptySymbol={<StarBorder style={styles.largeIcon} />}
          fullSymbol={<Star style={styles.largeIcon} />}
        />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default connect()(Supported);