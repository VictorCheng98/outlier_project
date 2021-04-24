import { React, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

// import Listener from "./components/Listener";
import Listener from "./components/Listener";
import Broadcaster from "./components/Broadcaster";

const Routes = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
    <Route path='/listener' component={Listener}></Route>
     <Route path='/broadcaster' component={Broadcaster}></Route>
    </Switch>
  );
}
  
export default Routes;