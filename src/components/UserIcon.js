import React, { Component } from "react";
import styled, { css } from "styled-components";
import OcticonsIcon from "react-native-vector-icons/dist/Octicons";

function UserIcon(props) {
  return (
    <Container {...props}>
      <IconStack>
        <OcticonsIcon
          name="person"
          style={{
            top: 9,
            left: 21,
            position: "absolute",
            fontSize: 50,
            color: "rgba(230,0,0,1)"
          }}
        ></OcticonsIcon>
        <svg
          viewBox="0 0 80 80"
          style={{
            left: 0,
            width: 80,
            height: 80,
            position: "absolute",
            opacity: 0.20,
            top: 0
          }}
        >
          <ellipse
            strokeWidth={0}
            cx={40}
            cy={40}
            rx={40}
            ry={40}
            fill="rgba(230, 230, 230,1)"
          ></ellipse>
        </svg>
      </IconStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconStack = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
`;

export default UserIcon;
