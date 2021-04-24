import React, { Component, useState } from "react";

const BroadcasterContext = React.createContext({
  showReq: false,
  toggleShowReq: () => {},
  requestList: [{}],
  hostList: [{}]
});

export default BroadcasterContext