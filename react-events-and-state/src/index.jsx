import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked === true) {
      return (
        <button onClick = {this.handleClick}>Thanks!</button>
      );
    } else {
      return (
        <button onClick = {this.handleClick}>Click Me!</button>
      );
    }
  }
}

const element = (
  <div>
    <CustomButton />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
