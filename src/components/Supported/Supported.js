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

  getInitialRating = () => {
    // Keep star rating selected by user
    // Convert arr to number 
    let num = Number(this.props.supported);
    return this.state.supported === 0 ? num : this.state.supported;
  }
  
  handleNext = (event) => {
    let data;
    // Check if state is 0
    if(this.state.supported === 0) {
      // if 0, use redux store saved rating
      data = this.props.supported;
    } else {
      // Use updated rating
      data = this.state.supported;
    }
    this.props.dispatch({type: 'ADD_SUPPORTED', payload: data});
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
    supported: store.supported
  }
}

export default connect(mapStateToProps)(Supported);