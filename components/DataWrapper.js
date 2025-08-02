import React, { useEffect, useState, useCallback } from "react";
import { DataContext } from "./DataContext";
import { useIsLoggedIn } from "../hooks/useLoggedIn";
import * as SecureStore from "expo-secure-store";

const DataWrapper = ({ children }) => {
  const [accessToken, isLoggedIn] = useIsLoggedIn();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAccessToken = async () => {
    try {
      const tokenData = await SecureStore.getItemAsync("accessToken");
      if (tokenData) {
        return JSON.parse(tokenData).token;
      }
      return null;
    } catch (err) {
      console.error("Failed to retrieve access token:", err);
      return null;
    }
  };

  const reload = (key) => {
    if (key === "dbUser") {
      fetchUserData();
    } else if (key === "products") {
      fetchProducts();
    } else if (key === "categories") {
      fetchCategories();
    }
  };

  const fetchUserData = useCallback(async () => {
    if (!isLoggedIn) return;
    try {
      const token = await getAccessToken();
      if (!token) {
        console.error("No access token found");
        return;
      }
      const res = await fetch("http://192.168.1.8:3000/api/user/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      console.log("✅ user fetch successfull");
      setUser(data.user);
    } catch (err) {
      console.error("User fetch failed:", err);
    }
  }, [isLoggedIn]);

  const fetchProducts = useCallback(async () => {
    try {
      const headers = { "Content-Type": "application/json" };
      const res = await fetch("http://192.168.1.8:3000/api/user/getProducts", {
        method: "GET",
        headers,
      });
      const data = await res.json();
      console.log("✅ Product fetch successfull");
      setProducts(data.products || []);
    } catch (err) {
      console.error("Products fetch failed:", err);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const token = await getAccessToken();
      const headers = token
        ? {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        : { "Content-Type": "application/json" };
      const res = await fetch(
        "http://192.168.1.8:3000/api/user/getCategories",
        {
          method: "GET",
          headers,
        }
      );
      // http://192.168.1.8:3000
      const data = await res.json();
      console.log("✅ Category fetch successfull");
      setCategories(data.categories || []);
    } catch (err) {
      console.error("Categories fetch failed:", err);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    if (!isLoggedIn || (products && (user || !isLoggedIn))) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [products, user, isLoggedIn]);

  return (
    <DataContext.Provider
      value={{
        dbUser: user,
        products: products || [],
        categories: categories || [],
        isLoading: isLoading,
        reload,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataWrapper;
