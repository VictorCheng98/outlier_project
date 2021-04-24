import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components";

import ListenerTitle from "./ListenerTitle";
import BroadcasterTitle from "./BroadcasterTitle";
import BroadcastList from "./BroadcastList";
import BroadcastListAccepted from "./BroadcastListAccepted";

import JoinIcon from "../assets/images/join.PNG";
import RequestIcon from "../assets/images/requests.PNG";
import ChatPic from "./ChatPic";

import ListenerContext from "./ListenerContext";

class Listener extends Component {

  render() {
    return (
      <ListenerContext.Consumer>
        {({ stage, toRequested, type }) => (
          <Container>
            {
              type === "broadcaster" ? 
              <BroadcasterTitle
              style={{
                height: 76,
                width: 457,
                marginTop: 25,
                alignSelf: "center"
              }}
            >
            </BroadcasterTitle>
            :
            <ListenerTitle
                  style={{
                    height: 76,
                    width: 457,
                    marginTop: 25,
                    alignSelf: "center"
                  }}
            >
            </ListenerTitle>
            }

            <h1 style={{
              display: "flex",
              justifyContent:'center',
              alignSelf:'center'
            }}>
            {
              type === "broadcaster" ? 
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
            <h1 style={{
              display: "flex",
              justifyContent:'center',
              alignSelf:'center'
              }}>
              { 
                type === "listener" ? 
                <Link to="/broadcaster">
                  <TouchableOpacity
                    style={{
                      height: 64,
                      width: 45,
                      outline: 'none',
                      background: `url(${JoinIcon})`
                    }}
                  onPress={() => toRequested({stage})}>
                  </TouchableOpacity>
                </Link>
                :
                <TouchableOpacity style={{
                  height: 75,
                  width: 80,
                  outline: 'none',
                  marginBottom: 60,
                  background: `url(${RequestIcon})`
                  }}
                >
                </TouchableOpacity>
              }
              {(() => {
                if (stage === "requested") {
                  alert("Requested to join broadcast")
                } 
                if (stage === "approved") {
                  alert("Request approved")
                }
                if (stage === "denied") {
                  alert("Request denied")
                }
              })()}
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
      </ListenerContext.Consumer>
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

export default Listener; 