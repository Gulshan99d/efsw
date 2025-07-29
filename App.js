import React from "react";
import MainNavigation from "./components/MainNavigation";
import DataWrapper from "./components/DataWrapper";
import * as AuthSession from "expo-auth-session";

const redirectUri = AuthSession.makeRedirectUri({
  useProxy: true,
});

console.log("Redirect URI:", redirectUri,"  here");

const App = () => {
  return (
    <DataWrapper>
      <MainNavigation />
    </DataWrapper>
  );
};

export default App;
