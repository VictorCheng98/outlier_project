import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import joinIcon from "../assets/images/join.PNG";

function JoinIcon(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={joinIcon}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    backgroundColor: "rgba(15,15, 15,0)",
    flex: 1
  }
});

export default JoinIcon;
