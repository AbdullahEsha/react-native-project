import React, { useState } from "react";
import { Button, Image, Text, TextInput, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams } from "expo-router";

import tw from "twrnc";

export default function ForgotPasswordScreenWithToken() {
  const [user, setUser] = useState({
    email: "",
  });

  const { token } = useLocalSearchParams();

  console.log("Token: ", token);

  const handleForgotPassword = (user = { email: "" }) => {
    console.log(user);
    alert(`User with email: ${user.email} has been sent a reset link!`);
  };

  //   get the token from the url

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
        <ThemedText type="title">Forgot Password!</ThemedText>
      </ThemedView>

      <TextInput
        placeholder="Email"
        style={tw`bg-gray-100 p-2 mb-2 rounded`}
        onChangeText={(text) => setUser({ ...user, email: text })}
        value={user.email}
      />

      <View style={tw`mb-4`}>
        <Button
          title="Send Reset Link"
          onPress={() => handleForgotPassword(user)}
        />
      </View>
      <Text style={tw`text-center text-blue-500 mb-4`}>Token: {token}</Text>
    </ParallaxScrollView>
  );
}
