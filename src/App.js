import React, { Component } from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes";

import styled from "styled-components";
import ListenerContext from "./components/ListenerContext";

const Container = styled.div`
  display: flex;
  background-color: rgba(25,25,25,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

class App extends Component {

  constructor(props) {
    super(props);

    this.toRequested = () => {
      this.setState(state => ({
        prevStage: state.stage,
        stage: "requested"
      }));
    };

    this.toApproved = () => {
      this.setState(state => ({
        prevStage: state.stage,
        stage: "approved",
        type: "broadcaster"
      }));
    };

    this.toDenied = () => {
      this.setState(state => ({
        prevStage: state.stage,
        stage: "denied"
      }));
    };

    this.state = {
      id: 1,
      name: "Victor",
      requestTime: 24,
      stage: "idle",
      prevStage: null,
      toRequested: this.toRequested,
      toApproved: this.toApproved,
      toDenied: this.toDenied,
      type: "listener"
    };
  }

  updateState = () => {
    if (this.state.stage === "approved") {
      this.toApproved()
    }
    else if (this.state.stage === "denied") {
      this.toDenied()
      }
  }
  
  componentDidUpdate () {
    if (this.state.prevStage !== this.state.stage) {
      this.updateState()
    }
  }

  render () {
    return (
      <ListenerContext.Provider value={this.state}>
        <Container>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Container>
      </ListenerContext.Provider>
    )
  }
}

export default App