import React, { Component } from "react";
import styled, { css } from "styled-components";
import LiveIcon from "../assets/images/live.jpg";

function ListenerInfoTitle(props) {
  return (
    <Container {...props}>
      <InfoRow>
        <InfoStack>
          <Title>LCS</Title>
          <Listeners>200 Listening</Listeners>
          <Image
            src={LiveIcon}
          ></Image>
        </InfoStack>
        <Followers>398 Followers</Followers>
      </InfoRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 47px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 19px;
  width: 111px;
  text-align: center;
`;

const Listeners = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 142px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 19px;
  width: 111px;
  text-align: center;
`;

const Image = styled.img`
  top: 0px;
  left: 0px;
  width: 56px;
  height: 19px;
  position: absolute;
  object-fit: contain;
`;

const InfoStack = styled.div`
  width: 253px;
  height: 19px;
  position: relative;
`;

const Followers = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 19px;
  width: 111px;
  text-align: center;
`;

const InfoRow = styled.div`
  height: 19px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

export default ListenerInfoTitle;
