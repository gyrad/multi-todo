import React, { Component } from 'react';

class DueDateButton extends Component {
  render() {
    return (
      <div>
        <button
          className="duedate-btn"
          title="Set a Due Date"
          onClick={this.props.onClick}
        >
          <i className="fas fa-calendar" />
        </button>
      </div>
    );
  }
}

export default DueDateButton;
