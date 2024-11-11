import React, { useState } from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "@react-navigation/native";

import tw from "twrnc";

export default function LoginScreen() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigation<any>();

  const handleLogin = () => {
    fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed"); // Handle non-200 responses
        }
        return response.json();
      })
      .then((data) => {
        // Clear the form
        setUser({
          email: "",
          password: "",
        });

        localStorage.setItem("accessToken", data.accessToken);
        navigation.navigate("admin/dashboard");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error logging in!");
      });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={tw`w-full h-full`}
        />
      }
    >
      <ThemedView style={tw`flex-row items-center mb-4`}>
        <ThemedText type="title">Login!</ThemedText>
      </ThemedView>
      <TextInput
        placeholder="Email"
        style={tw`bg-gray-100 p-2 mb-2 rounded`}
        onChangeText={(text) => setUser({ ...user, email: text })}
        value={user.email}
      />

      <TextInput
        placeholder="Password"
        style={tw`bg-gray-100 p-2 mb-2 rounded`}
        secureTextEntry
        onChangeText={(text) => setUser({ ...user, password: text })}
        value={user.password}
      />

      <View style={tw`mb-4`}>
        <Button title="Login" onPress={handleLogin} />
      </View>

      <View style={tw`flex-row justify-between`}>
        <Link to="/auth/register">
          <Text style={tw`text-blue-500 underline`}>
            Don't have an account?
          </Text>
        </Link>
        <Link to="/auth/forgotPassword">
          <Text style={tw`text-blue-500 underline`}>Forgot Password?</Text>
        </Link>
      </View>
    </ParallaxScrollView>
  );
}
