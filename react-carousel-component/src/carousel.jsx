import React from 'react';

const characters = [
  {
    id: 1,
    name: 'Webber',
    url: 'images/webber.jpg'
  },
  {
    id: 2,
    name: 'Wilson',
    url: 'images/wilson.jpg'
  },
  {
    id: 3,
    name: 'Willow',
    url: 'images/willow.jpg'
  },
  {
    id: 4,
    name: 'Wendy',
    url: 'images/wendy.jpg'
  },
  {
    id: 5,
    name: 'Woody',
    url: 'images/woody.jpg'
  }
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImgId: 1,
      characters: characters
    };
    this.handleClick = this.handleClick.bind(this);
    this.autoSwitchImg = this.autoSwitchImg.bind(this);
  }

  componentDidMount() {
    setInterval(this.autoSwitchImg, 3000);
  }

  autoSwitchImg() {
    if (this.state.activeImgId === characters.length) {
      this.setState({
        activeImgId: 1
      });
    } else {
      this.setState({
        activeImgId: this.state.activeImgId + 1
      });
    }
  }

  handleClick(event) {
    if ((this.state.activeImgId === characters.length) && (event.target.getAttribute('class') === 'fa-solid fa-angle-right')) {
      this.setState({
        activeImgId: 1
      });
    } else if (event.target.getAttribute('class') === 'fa-solid fa-angle-right') {
      this.setState({
        activeImgId: this.state.activeImgId + 1
      });
    } else if ((this.state.activeImgId === 1) && (event.target.getAttribute('class') === 'fa-solid fa-angle-left')) {
      this.setState({
        activeImgId: 5
      });
    } else if (event.target.getAttribute('class') === 'fa-solid fa-angle-left') {
      this.setState({
        activeImgId: this.state.activeImgId - 1
      });
    } else if (event.target.getAttribute('class') === 'fa-solid fa-circle mx-1') {
      this.setState({
        activeImgId: this.state.activeImgId
      });
    } else if (event.target.getAttribute('class') === 'fa-regular fa-circle mx-1') {
      const imgId = Number(event.target.getAttribute('data-id'));
      this.setState({
        activeImgId: imgId
      });
    }
  }

  render() {
    const active = this.state.activeImgId ? '' : 'display-none';
    const imgList = characters.map(character => {
      if (this.state.activeImgId === character.id) {
        return (
          <CharacterImg character={character} active={active} key={character.id.toString()} />
        );
      } else {
        return (
          <CharacterImg character={character} active='display-none' key={character.id.toString()} />
        );
      }
    });
    const circles = characters.map(character => {
      if (this.state.activeImgId === character.id) {
        return (
          <i className="fa-solid fa-circle mx-1" key={character.id.toString()} data-id={character.id} onClick={this.handleClick} />
        );
      } else {
        return (
          <i className="fa-regular fa-circle mx-1" key={character.id.toString()} data-id={character.id} onClick={this.handleClick} />
        );
      }
    });

    return (
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="text-center">
            <i className="fa-solid fa-angle-left" onClick={this.handleClick} />
            <div className="img-container mx-3 mb-3">
              {imgList}
            </div>
            <i className="fa-solid fa-angle-right" onClick={this.handleClick}/>
          </div>
          <div className="cicles text-center">
            {circles}
          </div>
        </div>
      </div>
    );
  }
}

function CharacterImg(props) {
  const { id, name, url } = props.character;

  return (
    <img src={url} alt={name} className={`${props.active} img-fluid character-img`} data-id={id} />
  );
}
export default Carousel;
