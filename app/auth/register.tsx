import React, { useState } from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import tw from "twrnc";

export default function RegisterScreen() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigation = useNavigation<any>();

  const handleRegister = () => {
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    } else {
      const userData = {
        name: user.name,
        email: user.email,
        password: user.password,
      };

      const api_url = "http://localhost:5000/api/v1/auth/register";

      fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          //   clear the form
          setUser({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });

          navigation.navigate("login");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error registering user!");
        });
    }
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
      <ThemedView style={tw`flex-row item-center mb-4`}>
        <ThemedText type="title">Register a user!</ThemedText>
      </ThemedView>
      <TextInput
        placeholder="Name"
        style={tw`bg-gray-100 p-2 mb-2`}
        onChangeText={(text) => setUser({ ...user, name: text })}
        value={user.name}
      />
      <TextInput
        placeholder="Email"
        style={tw`bg-gray-100 p-2 mb-2`}
        onChangeText={(text) => setUser({ ...user, email: text })}
        value={user.email}
      />
      <TextInput
        placeholder="Password"
        style={tw`bg-gray-100 p-2 mb-2`}
        onChangeText={(text) => setUser({ ...user, password: text })}
        value={user.password}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirm Password"
        style={tw`bg-gray-100 p-2 mb-2`}
        onChangeText={(text) => setUser({ ...user, confirmPassword: text })}
        value={user.confirmPassword}
        secureTextEntry
      />
      <View style={tw`mb-4`}>
        <Button title="Register" onPress={handleRegister} />
      </View>

      <View style={tw`flex-row justify-between`}>
        <Link href="/login">
          <Text style={tw`text-blue-500 underline`}>
            Already have an account?
          </Text>
        </Link>
        <Link
          href={{
            pathname: "/auth/forgotPassword/[token]",
            params: { token: "jkdsjkds45646kj5664ds" },
          }}
          style={tw`ml-4 text-blue-500 underline`}
        >
          Forgot Password? (with token)
        </Link>
      </View>
    </ParallaxScrollView>
  );
}
