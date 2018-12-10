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

class Content extends Component {
  state = {
    content: 0
  }

  getInitialRating = () => {
    // Keep star rating selected by user
    // Convert arr to number 
    let num = Number(this.props.content);
    return this.state.content === 0 ? num : this.state.content;
  }

  handleNext = (event) => {
    let data;
    // Check if state is 0
    if(this.state.content === 0) {
      // if 0, use redux store saved rating
      data = this.props.content;
    } else {
      // Use updated rating
      data = this.state.content;
    }
    this.props.dispatch({type: 'ADD_CONTENT', payload: data});
    this.props.history.push('/3');
  }

  handleStarClick = (value) => {
    this.setState({ content: value });
  }

  render() {
    return (
      <div>
        <Steps step={"2"} />
        <h2>How well are you understanding the content?</h2>
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
    content: store.content
  }
}

export default connect(mapStateToProps)(Content);