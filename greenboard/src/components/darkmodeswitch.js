import React, { Component } from 'react';

export default class DarkModeSwitch extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.updateMode()}
        className="dark-mode-switch"
      >
        <input
          className="switch-input"
          type="checkbox"
          checked={this.props.darkMode}
          onChange={() => { }}
        />
        <label className="switch-label">Dark Mode</label>
      </div>
    )
  }
}
