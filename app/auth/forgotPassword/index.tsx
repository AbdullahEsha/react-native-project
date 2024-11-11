import React, { useState } from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import tw from "twrnc";

export default function ForgotPasswordScreen() {
  const [user, setUser] = useState({
    email: "",
  });

  const handleForgotPassword = (user = { email: "" }) => {
    console.log(user);
    alert(`User with email: ${user.email} has been sent a reset link!`);
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
    </ParallaxScrollView>
  );
}
