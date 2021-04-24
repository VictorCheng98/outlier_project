import React from "react";
import styled, { css } from "styled-components";
import UserIcon from "./UserIcon";

import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import ProfPic from "../assets/images/profpic.png";

function BroadcastListAccepted(props) {
  return (
    <Container {...props}>
      <UserIconRow>
        <UserIcon
          style={{
            height: 80,
            width: 80
          }}
        ></UserIcon>
        <UserIcon
          style={{
            height: 80,
            width: 80,
            marginLeft: 22
          }}
        ></UserIcon>
        <UserIcon
          style={{
            height: 80,
            width: 80,
            marginLeft: 22
          }}
        ></UserIcon>
        <Image
          source={ProfPic}
          style={{
            height: 80,
            width: 80,
            marginLeft: 22
          }}
        ></Image>
      </UserIconRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserIconRow = styled.div`
  height: 80px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 59px;
`;

export default BroadcastListAccepted;
