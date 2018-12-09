import React, { Component } from 'react';
import DeleteSweep from '@material-ui/icons/DeleteSweep';

const iconStyle = {
  fontSize: '2rem'
}

class Feedback extends Component {
  render() {
    let feedback = this.props.feedback;
    return (
      <tr>
        <td>{feedback.feeling}</td>
        <td>{feedback.understanding}</td>
        <td>{feedback.support}</td>
        <td>{feedback.comments}</td>
        <td><DeleteSweep style={iconStyle}></DeleteSweep></td>
      </tr>
    )
  }
}

export default Feedback;