import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      const acessToken = await SecureStore.getItemAsync("accessToken");
      if (!acessToken) return setIsLoggedIn(false);

      const expiryTime = parseInt(acessToken.expiry);
      const now = Date.now();

      if (now > expiryTime) {
        await SecureStore.deleteItemAsync("accessToken");
        setIsLoggedIn(false);
        return;
      }

      try {
        const res = await fetch("http://192.168.1.23:3000/api/affilator/login/verify", {
          headers: { Authorization: `Bearer ${acessToken}` },
        });

        if (res.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        console.error("Login check failed:", err.message);
        setIsLoggedIn(false);
      }
    };

    checkLogin();
  }, []);

  return isLoggedIn;
};
