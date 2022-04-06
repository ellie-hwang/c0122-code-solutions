import React from 'react';

const topics = [
  {
    id: 1,
    topic: 'Tastea',
    details: 'They have solid fruit teas and their boba is green. Their milk teas are not very tasty.Popcorn chicken and fries are great, but the portion size got smaller.'
  },
  {
    id: 2,
    topic: 'Happy Lemon',
    details: 'Don\'t get their boba. They specialize in cheese foam drinks. They also have bubble waffles which are pretty good.Sometimes they have crepecakes too.'
  },
  {
    id: 3,
    topic: '7 Leaves',
    details: 'Boba is a hit or a miss.Sometimes it\'s too squishy and overcooked. Their taro milk tea is the best, but it could do with less sugar. Their menu has a good variety of teas.'
  }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicId: null,
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (parseInt(event.target.getAttribute('data-topic-id')) === this.state.topicId) {
      this.setState({
        topicId: null,
        isOpen: false
      });
    } else if (parseInt(event.target.getAttribute('data-topic-id')) !== this.state.topicId && this.state.isOpen === true) {
      this.setState({
        topicId: parseInt(event.target.getAttribute('data-topic-id')),
        isOpen: true
      });
    } else if (parseInt(event.target.getAttribute('data-topic-id')) !== this.state.topicId && this.state.isOpen === false) {
      this.setState({
        topicId: parseInt(event.target.getAttribute('data-topic-id')),
        isOpen: true
      });
    }
  }

  render() {
    const className = this.state.isOpen ? '' : 'display-none';
    const tabItems = topics.map(topic => {
      if (topic.id === this.state.topicId) {
        return (
        <div className="accordion-tab" key={topic.id.toString()}>
          <h2 className="tab-header" onClick={this.handleClick} data-topic-id={topic.id}>{topic.topic}</h2>
          <p className={`content-text ${className}`}>{topic.details}</p>
        </div>
        );
      } else {
        return (
        <div className="accordion-tab" key={topic.id.toString()}>
          <h2 className="tab-header" onClick={this.handleClick} data-topic-id={topic.id}>{topic.topic}</h2>
            <p className="content-text display-none">{topic.details}</p>
        </div>
        );
      }
    });
    return (
      <div className="accordion-container">
        {tabItems}
      </div>
    );
  }
}

export default Accordion;
