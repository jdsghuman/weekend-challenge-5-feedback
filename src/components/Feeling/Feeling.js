import React, { Component } from 'react';
import Steps from '../Steps/Steps';
import Rating from 'react-rating';
import './Feeling.css';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';

const styles = {
  largeIcon: {
    fontSize: '4rem'
  }
}

class Feeling extends Component {

  state = {
    feeling: 0
  }

  getInitialRating = () => {
    // Keep star rating selected by user
    // Convert arr to number 
    let num = Number(this.props.feeling);
    return this.state.feeling === 0 ? num : this.state.feeling;
  }

  // Next button handler
  handleNext = (event) => {
    let data;
    // Check if state is 0
    if(this.state.feeling === 0) {
      // if 0, use redux store saved rating
      data = this.props.feeling;
    } else {
      // Use updated rating
      data = this.state.feeling;
    }
    this.props.dispatch({type: 'ADD_FEELING', payload: data});
    this.props.history.push('/2');
  }

  // Set rating clicked by user
  handleStarClick = (value) => {
    this.setState({ feeling: value });
  }

  render() {
    return (
      <div>
        <Steps step={"1"} />
        <h2>How are you feeling today?</h2>
        {/* Star rating */}
        <Rating
          initialRating={this.getInitialRating()}
          onClick={this.handleStarClick}
          emptySymbol={<StarBorder style={styles.largeIcon} />}
          fullSymbol={<Star style={styles.largeIcon} />}
        />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    feeling: store.feeling
  }
}

export default connect(mapStateToProps)(Feeling);