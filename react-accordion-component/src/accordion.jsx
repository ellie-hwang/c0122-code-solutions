import React from 'react';

const topics = [
  {
    id: 1,
    topic: 'Tastea',
    heading: 'Tastea',
    details: 'They have solid fruit teas and their boba is green. Their milk teas are not very tasty.Popcorn chicken and fries are great, but the portion size got smaller.'
  },
  {
    id: 2,
    topic: 'HappyLemon',
    heading: 'Happy Lemon',
    details: 'Don\'t get their boba. They specialize in cheese foam drinks. They also have bubble waffles which are pretty good.Sometimes they have crepecakes too.'
  },
  {
    id: 3,
    topic: 'SevenLeaves',
    heading: '7 Leaves',
    details: 'Boba is a hit or a miss.Sometimes it\'s too squishy and overcooked. Their taro milk tea is the best, but it could do with less sugar. Their menu has a good variety of teas.'
  }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      display: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.hideDetails = this.hideDetails.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  hideDetails() {
    const details = document.querySelector('#' + this.state.topic);
    details.classList.add('display-none');
    const newTopic = '';
    this.setState({
      topic: newTopic
    });
  }

  showDetails() {
    const details = document.querySelector('#' + this.state.topic);
    details.classList.remove('display-none');
  }

  handleClick(event) {
    if (event.target.getAttribute('topic') === this.state.topic) {
      const newDisplay = 'false';
      this.setState({
        display: newDisplay
      }, this.hideDetails);
    } else if (event.target.getAttribute('topic') !== this.state.topic) {
      const newDisplay = 'true';
      this.setState({
        topic: event.target.getAttribute('topic'),
        display: newDisplay
      }, this.showDetails);
    }
  }

  render() {
    const tabItems = topics.map(topic =>
      <div className="accordion-tab" key={topic.id.toString()}>
        <p className="tab-header" onClick={this.handleClick} topic={topic.topic}>{topic.heading}</p>
        <p className="content-text display-none" id={topic.topic}>{topic.details}</p>
      </div>);
    return (
      <div className="accordion-container">
        {tabItems}
      </div>
    );
  }
}

export default Accordion;
