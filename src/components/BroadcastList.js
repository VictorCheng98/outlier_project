import React from "react";
import styled, { css } from "styled-components";
import UserIcon from "./UserIcon";

function BroadcastList(props) {
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
        <UserIcon
          style={{
            height: 80,
            width: 80,
            marginLeft: 22
          }}
        ></UserIcon>
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

export default BroadcastList;
