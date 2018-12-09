import React, { Component } from 'react';

const headerStyle = {
  borderBottom: '2px solid #5adbcf',
  display: 'inline-block',
  padding: '8px',
  color: '#5adbcf',
  fontWeight: '300'
}
class Steps extends Component {

  render() {
    return(
      <div>
        <h3 style={headerStyle}>Step <span>{this.props.step}</span> of 4</h3>
      </div>
    );
  }
}

export default Steps;