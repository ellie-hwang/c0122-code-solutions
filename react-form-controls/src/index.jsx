import React from 'react';
import ReactDOMClient from 'react-dom/client';

class NewsLetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state: ', this.state);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label htmlFor="email"> Email </label>
        <input type="text" id="email" onChange={this.handleChange} />
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<NewsLetterForm />);
