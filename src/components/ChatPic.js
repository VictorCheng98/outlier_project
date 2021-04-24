import React, { Component } from "react";
import styled, { css } from "styled-components";
import Chat from "../assets/images/chat.png";

function ChatPic(props) {
  return (
    <Image
      src={Chat}
    ></Image>
  );
}

const Image = styled.img`
  flex: 1 1 0%;
  height: 100%;
  object-fit: contain;
  display: flex;
  flex-direction: column;
`;

export default ChatPic;
