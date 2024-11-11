import { Image, Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "@react-navigation/native";

import tw from "twrnc";

export default function HomeScreen() {
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
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <View style={tw`mb-4`}>
        <ThemedText>
          Get started by react native with expo and typescript
        </ThemedText>
      </View>

      <Link to="/admin/dashboard">
        <Text style={tw`text-blue-500 underline`}> Admin Dashboard</Text>
      </Link>
    </ParallaxScrollView>
  );
}
