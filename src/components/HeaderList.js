import React, { Component } from "react";
//import { NavLink } from "react-router-dom";

import Scroll from "react-scroll-to-element";

import portofolioDetails from "../data/data";

class HeaderList extends Component {
  state = {
    activeId: 0
  };
  headerHandleClick = index => {
    this.setState({
      activeId: index
    });
  };

  render() {
    const headerLists = portofolioDetails.map((headerlist, index) => (
      <Scroll type="id" element={headerlist.title} key={headerlist.id}>
        <a
          ref={index}
          href={"#" + headerlist.title}
          className={
            this.state.activeId === index
              ? headerlist.classNames + " active"
              : headerlist.classNames
          }
          key={headerlist.id}
          onClick={this.headerHandleClick.bind(this, index)}
        >
          <div />
        </a>
      </Scroll>
    ));
    return <div className="header">{headerLists}</div>;
  }
}

export default HeaderList;
