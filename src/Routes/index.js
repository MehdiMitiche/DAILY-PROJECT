import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import WeatherScreen from "../screens/WeatherScreen";
import TrelloScreen from "../screens/TrelloScreen";
import ReciepeScreen from "../screens/ReciepeScreen";
import SalatScreen from "../screens/SlatScreen";

const Router = () => {
  return (
    <Switch>
      <Route path="/weather">
        <WeatherScreen />
      </Route>
      <Route path="/trello">
        <TrelloScreen />
      </Route>
      <Route path="/reciepe">
        <ReciepeScreen />
      </Route>
      <Route path="/salat">
        <SalatScreen />
      </Route>
      <Route path="/">
        <HomeScreen />
      </Route>
    </Switch>
  );
};

export default Router;
