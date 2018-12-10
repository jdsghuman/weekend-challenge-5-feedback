import React, { Component } from 'react';
import DeleteSweep from '@material-ui/icons/DeleteSweep';
import axios from 'axios';
import { connect } from 'react-redux';

// Admin icon styles
const iconStyle = {
  fontSize: '2rem',
  cursor: 'pointer'
}

class Feedback extends Component {

  deleteFeedback = (id) => {
    console.log('delete', id);
    axios.delete(`/feedback/${id}`)
      .then(res => {
        console.log('Deleted');
        this.props.refreshFeedbackTable();
      })
      .catch(err => {
        console.log('error!');
      })
  }

  render() {
    let feedback = this.props.feedback;
    return (
      <tr>
        <td>{feedback.feeling}</td>
        <td>{feedback.understanding}</td>
        <td>{feedback.support}</td>
        <td>{feedback.comments}</td>
        <td><DeleteSweep style={iconStyle} onClick={e => window.confirm('Are you sure you want to delete this?') && 
          this.deleteFeedback(feedback.id)}></DeleteSweep></td>
      </tr>
    )
  }
}

export default connect()(Feedback);