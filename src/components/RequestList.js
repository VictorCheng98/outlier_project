import React, { Component } from "react";
import { Link } from "react-router-dom";
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import ApproveIcon from "../assets/images/approve.PNG";
import DenyIcon from "../assets/images/denyIcon.PNG";
import ProfPic from "../assets/images/profpic.png";

import ListenerContext from "./ListenerContext";

function RequestList(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.image3Row}>
        <Image
          source={ProfPic}
          resizeMode="contain"
          style={styles.profpic}
        ></Image>
        <Text style={styles.name}>Vic</Text>
        <Text style={styles.time}>10m</Text>
        <ListenerContext.Consumer>
          {({ stage, toRequested, toApproved, toDenied }) => (
            <Link to="/listener">
              <button
                style={{
                  height: 40,
                  width: 42,
                  marginLeft: 40,
                  background: `url(${ApproveIcon})`
                  }}
                onClick={() => toApproved()}>
              </button>

              <button
                style={{
                  height: 42,
                  width: 42,
                  marginLeft: 11,
                  background: `url(${DenyIcon})`
                }}
                onClick={() => toDenied()}>
              </button>
            </Link>
          )}
        </ListenerContext.Consumer>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  profpic: {
    width: 47,
    height: 38
  },
  name: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 35,
    width: 39,
    fontSize: 20,
    marginLeft: 12,
    marginTop: 7
  },
  time: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 35,
    width: 51,
    fontSize: 20,
    marginLeft: 58,
    marginTop: 7
  },
  approve: {
    width: 40,
    height: 40,
    marginLeft: 50
  },
  deny: {
    width: 40,
    height: 40,
    marginLeft: 11
  },
  image3Row: {
    height: 42,
    flexDirection: "row",
    flex: 1
  }
});

export default RequestList;
