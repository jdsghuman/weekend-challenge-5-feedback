import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feedback from '../Feedback/Feedback';
import axios from 'axios';

class Admin extends Component {

  state = {
    feedback: []
  }

  componentDidMount() {
    // this.props.dispatch({ type: 'GET_FEEDBACK'});
    this.refreshFeedbackTable();
  }

  refreshFeedbackTable = () => {
    axios.get('/feedback').then(res => {
      this.setState({
        feedback: res.data
      });
    });
  }

  render() {
    let feedbackResult = this.state.feedback.reverse().map(feed => {
      return <Feedback refreshFeedbackTable={this.refreshFeedbackTable} key={feed.id} feedback={feed} />;
    })
    return (
      <div>
        <h2>Feedback Results</h2>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {feedbackResult}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect()(Admin);