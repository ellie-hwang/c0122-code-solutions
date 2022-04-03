import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu() {
    document.querySelector('.menu').style.width = '20%';
    document.querySelector('.black-bg').style.visibility = 'visible';
    document.querySelector('.black-bg').style.opacity = '0.7';
  }

  hideMenu() {
    document.querySelector('.menu').style.width = '0';
    document.querySelector('.black-bg').style.opacity = '0';
    document.querySelector('.black-bg').style.visibility = 'hidden';
  }

  handleClick(event) {
    if (event.target.matches('#menu-icon')) {
      const newState = true;
      this.setState({
        display: newState
      }, this.showMenu);
    } else if (event.target.matches('.menu-item') || event.target.matches('.black-bg')) {
      const newState = false;
      this.setState({
        display: newState
      }, this.hideMenu);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="icon-container">
          <i id="menu-icon" className="fas fa-bars" onClick={this.handleClick}></i>
        </div>
        <div id="black-bg" className="black-bg" onClick={this.handleClick}>
        </div>
        <div className="menu" onClick={this.handleClick}>
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
