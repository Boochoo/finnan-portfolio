import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

//components
import Header from "./components/Header";
//import Section from "./components/Section";

// data
import portofolioDetails from "./data/data";

class App extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll(e) {
    /* let scrollTop = e.srcElement.body.scrollTop,
      itemTranslate = Math.min(0, scrollTop / 3 - 60);

    console.log(scrollTop);
    console.log(itemTranslate);

    this.setState({
      transform: itemTranslate
    }); */

    ReactDOM.findDOMNode(this.refs.headerElement).classList.add(
      "scroll__effect"
    );

    //console.log("scrolling ", e);
  }
  render() {
    const portofolioList = portofolioDetails.map(detail => (
      <section key={"deatil-" + detail.id} id={detail.id}>
        <div className="sec__desc">
          <p>{detail.description}</p>
        </div>
      </section>
    ));
    return (
      <div>
        <Header ref="headerElement" />

        {portofolioList}
      </div>
    );
  }
}

export default App;
