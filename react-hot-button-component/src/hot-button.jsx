import React from 'react';

export class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    if (this.state.clickCount < 4) {
      const className = 'dark-blue';
      return (
        <button onClick={this.handleClick} className={className}>Hot Button</button>
      );
    } else if (this.state.clickCount < 7) {
      const className = 'blue';
      return (
        <button onClick={this.handleClick} className={className}>Hot Button</button>
      );
    } else if (this.state.clickCount < 10) {
      const className = 'red';
      return (
        <button onClick={this.handleClick} className={className}>Hot Button</button>
      );
    } else if (this.state.clickCount < 13) {
      const className = 'orange';
      return (
        <button onClick={this.handleClick} className={className}>Hot Button</button>
      );
    } else if (this.state.clickCount < 16) {
      const className = 'yellow';
      return (
        <button onClick={this.handleClick} className={className}>Hot Button</button>
      );
    } else {
      const className = 'white';
      return (
        <button onClick={this.handleClick} className={className}>Hot Button</button>
      );
    }
  }
}
