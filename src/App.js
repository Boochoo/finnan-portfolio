import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import "font-awesome/css/font-awesome.min.css";

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
    ReactDOM.findDOMNode(this.refs.headerElement).classList.add(
      "scroll__effect"
    );
  }
  render() {
    const portofolioList = portofolioDetails.map(detail => (
      <section
        key={"deatil-" + detail.title}
        pathname={detail.pathname}
        id={detail.title}
      >
        <div className="sec__desc">
          <pre>{JSON.stringify(detail.description, null, 2)}</pre>
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
