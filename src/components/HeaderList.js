import React, { Component } from "react";

class HeaderList extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_clickable">Home</div>
        <div className="header_clickable">Edu</div>
        <div className="header_clickable">Exper</div>
        <div className="header_clickable">Skil</div>
      </div>
    );
  }
}

export default HeaderList;
