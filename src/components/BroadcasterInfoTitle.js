import React, { Component } from "react";
import styled, { css } from "styled-components";
import LiveIcon from "../assets/images/live.jpg";

function BroadcasterInfoTitle(props) {
  return (
    <Container {...props}>
      <OuterRow>
        <InfoStack>
          <Text>43 Listening</Text>
          <Image
            src={LiveIcon}
          ></Image>
        </InfoStack>
      </OuterRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 160px;
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
  left: 100px;
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

const OuterRow = styled.div`
  height: 19px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

export default BroadcasterInfoTitle;
