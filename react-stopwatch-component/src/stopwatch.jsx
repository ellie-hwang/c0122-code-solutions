import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      isTicking: false,
      intId: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
  }

  tick() {
    if (this.state.isTicking === true) {
      this.setState({
        intId: setInterval(() => {
          this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
          });
        }, 1000)
      });
    } else if (this.state.isTicking === false) {
      clearInterval(this.state.intId);
    }
  }

  handleClick() {
    const newState = !this.state.isTicking;
    this.setState({
      isTicking: newState
    }, this.tick);
  }

  reset() {
    if (this.state.isTicking === false) {
      this.setState({
        secondsElapsed: 0
      });
    }
  }

  render() {
    const icon = this.state.isTicking ? 'fas fa-pause' : 'fas fa-play';
    return (
      <div className="row">
        <div id="watchface" onClick={this.reset}>
          <p>{this.state.secondsElapsed}</p>
        </div>
        <div id="icon-container">
          <i onClick={this.handleClick} className={icon} />
        </div>
      </div>
    );
  }
}

export default StopWatch;
