import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  
  submitFeedback = () => {
    const data = {
      feeling: this.props.feeling
    }
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
        {/* Display user response */}
        <p>Feelings: {this.props.feeling}</p>
        <p>Understanding: {this.props.content}</p>
        <p>Support: {this.props.supported}</p>
        <p>Comments: {this.props.comment}</p>
        <button disabled={!isEnabled}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    feeling: store.feeling,
    content: store.content,
    supported: store.supported,
    comment: store.comment
  }
}

export default connect(mapStateToProps)(Review);