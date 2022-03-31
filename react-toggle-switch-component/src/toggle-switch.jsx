import React from 'react';

export class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    if (this.state.isToggleOn === true) {
      return (
        <div className="row">
          <div className="switch">
            <input type="checkbox" id="switch" />
            <span className="slider" onClick={this.handleClick}></span>
          </div>
          <label htmlFor="switch">ON</label>
        </div>
      );
    } else if (this.state.isToggleOn === false) {
      return (
        <div className="row">
          <div className="switch">
            <input type="checkbox" id="switch" checked="checked" />
            <span className="slider" onClick={this.handleClick}></span>
          </div>
          <label htmlFor="switch">OFF</label>
        </div>
      );
    }
  }
}
