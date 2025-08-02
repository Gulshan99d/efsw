import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      const acessToken = JSON.parse(
        await SecureStore.getItemAsync("accessToken")
      );
      // if (acessToken) {
      //   console.log(acessToken.token,"accessToken");
      //   console.log(acessToken.expiry,"expiry");
      // }

      if (!acessToken) return setIsLoggedIn(false);

      const expiryTime = parseInt(acessToken.expiry);
      const now = Date.now();

      if (now > expiryTime) {
        await SecureStore.deleteItemAsync("accessToken");
        setIsLoggedIn(false);
        return;
      }
      setAccessToken(acessToken.token);
      // setAccessToken(acessToken.token);

      try {
        const res = await fetch(
          "http://192.168.1.8:3000/api/user/login/verify",
          {
            method: "POST",
            headers: { Authorization: `Bearer ${acessToken.token}` },
          }
        );

        if (res.ok) {
          setIsLoggedIn(true);
          console.log("Login check successful");
        } else {
          console.log("Login check failed:", res.statusText);
          setIsLoggedIn(false);
        }
      } catch (err) {
        console.error("Login check failed:", err.message);
        setIsLoggedIn(false);
      }
    };

    checkLogin();
  }, []);

  return [accessToken, isLoggedIn];
};
