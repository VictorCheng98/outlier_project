import React from "react";

const ListenerContext = React.createContext({
  id: 1,
  name: "Victor",
  requestTime: 24,
  stage: "idle",
  toRequested: () => {},
  toApproved: () => {},
  toDenied: () => {},
  type: "listener",
  hostList: []
});

export default ListenerContext