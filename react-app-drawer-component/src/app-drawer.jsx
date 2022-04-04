import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.matches('#menu-icon')) {
      const newState = true;
      this.setState({
        display: newState
      });
    } else if (event.target.matches('.menu-item') || event.target.matches('.black-bg')) {
      const newState = false;
      this.setState({
        display: newState
      });
    }
  }

  render() {
    const bgVisible = this.state.display ? 'bg-visible' : '';
    const menuVisible = this.state.display ? 'menu-visible' : '';
    return (
      <div className="row">
        <div className="icon-container">
          <i id="menu-icon" className="fas fa-bars" onClick={this.handleClick}></i>
        </div>
        <div id="black-bg" className={`black-bg ${bgVisible}`} onClick={this.handleClick}>
        </div>
        <div className={`menu ${menuVisible}`} onClick={this.handleClick}>
          <p className="menu-header">Explore Bikini Bottom</p>
          <a className="menu-item" href="#">Spongebob&apos;s House</a>
          <a className="menu-item" href="#">Patrick&apos;s Rock</a>
          <a className="menu-item" href="#">Squidward&apos;s Place</a>
          <a className="menu-item" href="#">Krusty Krab</a>
          <a className="menu-item" href="#">Glove World</a>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
