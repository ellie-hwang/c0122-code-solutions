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
  }

  tick() {
    if (this.state.isTicking === true) {
      this.setState({
        intId: setInterval(() => {
          this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
          });
          // console.log(this.state.secondsElapsed);
        }, 1000)
      });
    } else if (this.state.isTicking === false) {
      clearInterval(this.state.intId);
    }
  }

  handleClick() {
    this.setState({
      isTicking: !this.state.isTicking
    });
    // console.log('This should be true: ', this.state.isTicking);
    this.tick();
  }

  render() {
    const icon = this.state.isTicking ? 'fas fa-pause' : 'fas fa-play';
    return (
      <div>
        <div id="watchface"></div>
        <i onClick={this.handleClick} className={icon} />
      </div>
      // <div
      //   onClick={this.handleClick}
      //   className={`toggle-switch ${modifierClass}`}>
      //   <div className="slider">
      //     <div className="switch"></div>
      //   </div>
      //   <span className="state-label">{label}</span>
      // </div>
    );
  }
}

export default StopWatch;
