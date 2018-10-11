import React, { Component } from "react";
import "./App.css";
import Content from "./Components/Content/Content";
import Social from "./Components/Extras/SocialMedia.jsx";
import NavSection from "./Components/Extras/NavSection.jsx";
import Services from "./Components/Services/Services.jsx";
import {
  TransitionGroup,
  Transition,
  CSSTransition
} from "react-transition-group";
import Nav from "./Components/Extras/Nav.jsx";

let Items = [];

class App extends Component {
  switch = x => {
    this.setState({
      ID: x,
      NavMenu: false,
      Social: <Social Class="S-M-H" />,
      Nav: <Nav load={() => this.loadNav()} />,
      Push: false,
      Back: null
    });
  };

  loadNav = () => {
    this.setState({
      NavMenu: true,
      Nav: null,
      Social: null,
      Push: true
    });
  };

  closeNav = () => {
    this.setState({
      NavMenu: false,
      Social: <Social Class="S-M-H" />,
      Nav: <Nav load={() => this.loadNav()} />,
      Push: false
    });
  };

  showBack = () => {
    let index = this.state.ID;
    this.setState({
      Back: (
        <button
          type="button"
          className="bttn"
          onClick={() => this.backOut(index)}
        >
          Go Back
        </button>
      )
    });
  };

  switchData = () => {
    this.setState({
      POS: 1
    })
  }

  backOut = () => {
    this.setState({
      POS: 0,
      Back: null
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      NavMenu: false,
      Social: <Social Class="S-M-H" />,
      Nav: <Nav load={() => this.loadNav()} />,
      Push: false,
      ID: 0,
      Back: null,
      POS: 0
    };
  }

  render() {
    const { Nav, Push, ID, Social, NavMenu, Back, POS } = this.state;
    Items = [
      <Content showBack={() => this.showBack()} pos={POS} switchContent={() => this.switchData()}/>,
      <Services showBack={() => this.showBack()} pos={POS} switchContent={() => this.switchData()}/>
    ];
    return (
      <div className="App">
        <Transition in={NavMenu} timeout={0}>
          {stat => (
            <div className={"Nav Nav-" + stat + ""}>
              <NavSection
                close={() => this.closeNav()}
                home={() => this.switch(0)}
                content={() => this.switch(1)}
              />
            </div>
          )}
        </Transition>
        <Transition in={Push} timeout={0}>
          {stat => (
            <TransitionGroup className={"Data text-center Data-" + stat + ""}>
              <CSSTransition
                key={ID}
                timeout={{ enter: 500, exit: 0 }}
                classNames={"Fade Fade"}
                exit={false}
                appear={true}
              >
                {Items[ID]}
              </CSSTransition>
            </TransitionGroup>
          )}
        </Transition>
        <h1
          className="TopView"
          style={{
            position: "fixed",
            right: "0",
            color: "white",
            top: "0",
            fontFamily: "Unica one",
            fontSize: "3em",
            fontWeight: "500",
            letterSpacing: "2px",
            paddingTop: "25px"
          }}
        >
          TopView0
        </h1>
        {Nav}
        {Social}
        {Back}
      </div>
    );
  }
}

export default App;
