import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="row">
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" />
      </div>
    );
  }
}

export default ValidatedInput;
