import React, { Component } from "react";
import styled, { css } from "styled-components";

import BroadcasterTitle from "./BroadcasterTitle";
import BroadcastList from "./BroadcastList";
import BroadcastListAccepted from "./BroadcastListAccepted";
import RequestList from "./RequestList";


import RequestIcon from "../assets/images/requests.PNG";
import ChatPic from "./ChatPic";

import ListenerContext from "./ListenerContext";
import BroadcasterContext from "./BroadcasterContext";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class Broadcaster extends Component {

  constructor(props) {
    super(props);

    this.toggleShowReq = () => {
      this.setState(state => ({
        showReq: !state.showReq
      }));
    };

    this.state = {
      showReq: false,
      toggleShowReq: this.toggleShowReq,
      requestList: [
        {name: "Alex", time: 30},
        {name: "Bob", time: 20},
        {name: "Victor", time: 15}
      ],
      hostList: [
        {name: "Alice"},
        {name: "Will"},
        {name: "Joe"}
      ]
  };
};

  Requests() {
    return (
      <RequestList style = {{
        position: "absolute",
        marginTop: 120,
        alignSelf: "center",
        height: 41,
        width: 348
        }}>
      </RequestList>
    )
  }

  render() {
    return (
      <BroadcasterContext.Provider value={this.state}>
        <BroadcasterContext.Consumer>
          {({ showReq, toggleShowReq, requestList }) => (
            <Container>
              <BroadcasterTitle
                style={{
                  height: 76,
                  width: 457,
                  marginTop: 25,
                  alignSelf: "center"
                }}
              >
              </BroadcasterTitle>
              <ListenerContext.Consumer>
                  {({ stage, toRequested, toApproved, toDenied }) => (
                <h1 style={{
                  display: "flex",
                  justifyContent:'center',
                  alignSelf:'center'
                }}>
                {
                  stage === "approved" ? 
                  <BroadcastListAccepted
                    style={{
                      height: 78,
                      width: 388,
                      marginTop: 30,
                      alignSelf: "center"
                    }}>
                      
                  </BroadcastListAccepted>
                  :
                  <BroadcastList
                    style={{
                      height: 78,
                      width: 388,
                      marginTop: 30,
                      alignSelf: "center"
                    }}>
                  </BroadcastList>
                }
                </h1>
              )}
              </ListenerContext.Consumer>
              
              <h1 style={{
                display: "flex",
                justifyContent:'center',
                alignSelf:'center'
              }}>
                <TouchableOpacity style={{
                  height: 75,
                  width: 80,
                  outline: 'none',
                  marginBottom: 60,
                  background: `url(${RequestIcon})`
                 }}
                    onPress={() => toggleShowReq({showReq})}>
                </TouchableOpacity>
                {
                  showReq === true ? this.Requests() : ""
                }
              </h1>
              <ChatPic
                style={{
                  height: 540,
                  width: 540,
                  alignSelf: "center"
                }}
              ></ChatPic>
            </Container>
      )}
      </BroadcasterContext.Consumer>
    </BroadcasterContext.Provider>
    )
  }
}
const Container = styled.div`
  display: flex;
  background-color: rgba(25,25,25,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default Broadcaster