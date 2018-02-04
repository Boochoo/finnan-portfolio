import React, { Component } from "react";
//import { NavLink } from "react-router-dom";

import portofolioDetails from "../data/data";

class HeaderList extends Component {
  state = {
    index: 1
  };
  headerHandleClick(i) {
    this.setState({
      index: i
    });
    //this.refs[i].classList.add("active");
    //this.refs[-i].classList.remove("active");
    console.log("clicked", this.refs[i]);
  }
  render() {
    const headerLists = portofolioDetails.map((headerlist, index) => (
      <a
        ref={index}
        href={"#" + headerlist.id}
        className={headerlist.classNames}
        key={headerlist.id}
        onClick={this.headerHandleClick.bind(this, headerlist.id)}
      >
        <div />
      </a>
    ));
    return <div className="header">{headerLists}</div>;
  }
}

export default HeaderList;
