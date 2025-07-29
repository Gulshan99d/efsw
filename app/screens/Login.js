// LoginScreen.js
import React, { useEffect } from "react";
import { View, Button, Alert, ActivityIndicator } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as SecureStore from "expo-secure-store";
import Toast from "react-native-toast-message";
import { makeRedirectUri } from "expo-auth-session";

const BACKEND_LOGIN_URL = "http://192.168.1.23:3000/api/user/login";

export default function LoginScreen({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      clientId:
        "286065569518-tbt4u1mctaloh2ielpr8gakvcqgl4k2k.apps.googleusercontent.com",
      scopes: ["profile", "email"],
      redirectUri: "https://auth.expo.io/@sholias/affilatorfsworld",
      responseType: "id_token",
      useProxy: true,
    },
    { projectNameForProxy: "@sholias/affilatorfsworld" }
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      handleBackendLogin(authentication.accessToken);
    }
  }, [response]);

  const handleBackendLogin = async (googleAccessToken) => {
    try {
      const res = await fetch(BACKEND_LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ provider: "google", token: googleAccessToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      await SecureStore.setItemAsync(
        "acessToken",
        JSON.stringify({ token: data.token, expiry: data.expiry })
      );
      console.log("Login successful, token stored:", data.accessToken);

      Toast.show({
        type: "success",
        text1: "Login Successful",
        text2: "Welcome back! 🎉",
        position: "top",
      });

      navigation.replace("Home");
    } catch (err) {
      console.error("Login Error:", err);
      Alert.alert("Error", err.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Button
        title="Continue with Google"
        disabled={!request}
        onPress={() => promptAsync({ useProxy: true })}
      />
    </View>
  );
}
