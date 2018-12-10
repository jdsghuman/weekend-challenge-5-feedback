import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Review extends Component {

  state = {
    requiredFieldsError: false
  }

  componentDidMount() {
    this.requiredFieldsError();
  }

  requiredFieldsError = () => {
    // Check required fields
    if (this.props.feeling > 0 &&
      this.props.content > 0 &&
      this.props.supported > 0) {
      this.setState({ requiredFieldsError: false });
    } else {
      this.setState({ requiredFieldsError: true });
    }
  }

  submitFeedback = () => {
    // Create data object for POST call
    const data = {
      feeling: this.props.feeling,
      content: this.props.content,
      support: this.props.supported,
      comment: String(this.props.comment)
    }

    axios.post('/submit', data)
      .then(res => {
        // Clear redux state
        this.props.dispatch({ type: 'RESET_INFO' });
        // Navigate to confirmation screen
        this.props.history.push('/confirmation');
      })
      .catch(err => {
        console.log('Error in POST ', err);
      });
  }

  render() {
    // Disable Submit button if user response not submitted 
    const isEnabled =
      this.props.feeling > 0 &&
      this.props.content > 0 &&
      this.props.supported > 0;

    return (
      <div>
        <h2>Review your feedback:</h2>
        {/* Check if required fields are missing */}
        {this.state.requiredFieldsError &&
          <h3 className="reviewError">
            Please fill out required fields!
          </h3>
        }
        {/* Display user response */}
        <p>{(this.props.feeling > 0) ? '' : <span className="requiredFieldError">*</span>}Feelings: <span className="reviewScore">{this.props.feeling}</span></p>
        <p>{(this.props.content > 0) ? '' : <span className="requiredFieldError">*</span>}Understanding: <span className="reviewScore">{this.props.content}</span></p>
        <p>{(this.props.supported > 0) ? '' : <span className="requiredFieldError">*</span>}Support: <span className="reviewScore">{this.props.supported}</span></p>
        <p>Comments: <span className="reviewScore">{this.props.comment}</span></p>
        <button disabled={!isEnabled} onClick={this.submitFeedback}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    feeling: reduxStore.feeling,
    content: reduxStore.content,
    supported: reduxStore.supported,
    comment: reduxStore.comment
  }
}

export default connect(mapStateToProps)(withRouter(Review));