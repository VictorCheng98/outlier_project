import React, { Component } from "react";
import styled, { css } from "styled-components";
import ListenerInfoTitle from "./ListenerInfoTitle";

function ListenerTitle(props) {
  return (
    <Container {...props}>
      <Name>Victor Cheng</Name>
      <ListenerInfoTitle
        style={{
          height: 19,
          width: 364,
          marginTop: 14,
          marginLeft: 46
        }}
      ></ListenerInfoTitle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-family: Abel;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  width: 457px;
  height: 43px;
  font-size: 30px;
  text-align: center;
`;

export default ListenerTitle;
