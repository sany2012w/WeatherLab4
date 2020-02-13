import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="headerText">Weather here</div>
        <button className="headerButton" onClick={this.props.updateGeolocation}>Update Geolocation</button>
      </div>
    );
  }
}

export default Header;
