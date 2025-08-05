// LoginScreen.js
import React, { useEffect } from 'react';
import { View, Button, Alert, ActivityIndicator } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
// import * as AuthSession from "expo-auth-session";
import * as SecureStore from 'expo-secure-store';
import Toast from 'react-native-toast-message';
import { makeRedirectUri } from 'expo-auth-session';

const BACKEND_LOGIN_URL = 'http://192.168.1.8:3000/api/user/login';

WebBrowser.maybeCompleteAuthSession();

// export default function LoginScreen({ navigation }) {
//   console.log("LoginScreen rendered");

//   useEffect(() => {
//     if (response) {
//       console.log("OAuth response:", response);
//     }
//     if (response?.type === "success") {
//       console.log("Google Auth Response:", response);
//       const { authentication } = response;
//       handleBackendLogin(authentication.accessToken);
//     }
//   }, [response]);

//   const handleBackendLogin = async (googleAcessToken) => {
//     try {
//       console.log("Sending token to backend:", googleAcessToken);
//       const res = await fetch(BACKEND_LOGIN_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ provider: "google", token: googleAcessToken }),
//       });
//       console.log("Backend response status:", res.status);

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       await SecureStore.setItemAsync(
//         "acessToken",
//         JSON.stringify({ token: data.token, expiry: data.expiry })
//       );
//       console.log("Login successful, token stored:", data.accessToken);

//       Toast.show({
//         type: "success",
//         text1: "Login Successful",
//         text2: "Welcome back! 🎉",
//         position: "top",
//       });

//       navigation.replace("Home");
//     } catch (err) {
//       console.error("Login Error:", err);
//       Alert.alert("Error", err.message);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
//       <Button
//         title="Continue with Google"
//         disabled={!request}
//         onPress={() => promptAsync()}
//       />
//     </View>
//   );
// }

export default function LoginScreen({ navigation }) {
	console.log('LoginScreen rendered');
	// const [request, response, promptAsync] = Google.useAuthRequest({
	//   webClientId:
	//     "286065569518-p703c2v38bs9m5fq7f5sc51v1td197tq.apps.googleusercontent.com",
	//   // webClientId:
	//   //   "286065569518-pi7vih8uk6oie9096251h289ggpv10v6.apps.googleusercontent.com",
	//   // iosClientId:
	//   //   "286065569518-j9j8kp49nuhf7biadn6kb6bgrsj1r72b.apps.googleusercontent.com",
	//   androidClientId:
	//     "286065569518-rga0aatttorkd7va26ubs19negeb3itq.apps.googleusercontent.com",
	//   redirectUri: "http://localhost:8081",
	//   // redirectUri: makeRedirectUri({
	//   //   useProxy: true,
	//   // }),
	// });

	useEffect(() => {
		// // console.log("Google Auth Response:", response);
		// const authentication  =
		// handleBackendLogin(authentication)
	}, []);

	const handleBackendLogin = async googleAcessToken => {
		try {
			console.log('Sending token to backend:', googleAcessToken);
			const res = await fetch(BACKEND_LOGIN_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ provider: 'google', googleAcessToken }),
			});
			console.log('Backend response status:', res.status);

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.message || 'Login failed');
			}

			await SecureStore.setItemAsync(
				'acessToken',
				JSON.stringify({ token: data.token, expiry: data.expiry })
			);
			console.log('Login successful, token stored:', data.token);

			Toast.show({
				type: 'success',
				text1: 'Login Successful',
				text2: 'Welcome back! 🎉',
				position: 'top',
			});

			navigation.replace('Home');
		} catch (err) {
			console.error('Login Error:', err);
			Alert.alert('Error', err.message);
		}
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
			<Button
				title='Continue with Google'
				// disabled={!request}
				onPress={() => promptAsync()}
			/>
		</View>
	);
}
