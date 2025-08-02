
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../app/screens/Home";
import LoginScreen from "../app/screens/Login";
import DetailScreen from "../app/screens/Details";

const Stack = createStackNavigator();

export default function MainNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Details">
            {(props) => <DetailScreen {...props} />}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
