import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
    // create a bound copy of the prototype method handleClick
    // assign the bound copy to an "own" property of this object
  }

  handleClick() {
    // decide how to update state
    // please transition to a new state
    this.setState({ isClicked: true });
    // schedules a re-render with a new state
  }

  // NEXT React immediately calls the render method to get the React elements
  render() {
    // 100% decide how the UI should look
    if (this.state.isClicked === true) {
      return (
        <button onClick = {this.handleClick}>Thanks!</button>
        /**
         * {
         * type: 'button',
         * props: {
         *    children: 'Thanks!'
         *    }
         * }
         */
      );
    } else {
      return (
        <button onClick = {this.handleClick}>Click Me!</button>
        /**
         * {
         * type: 'button',
         * props: {
         *    onClick: this.handleClick,
         *    children: 'Click Me!'
         *    }
         * }
         */
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
