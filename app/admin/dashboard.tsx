import { Image, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProtectAdmin } from "@/helper/protectAdmin"; // Ensure the path is correct

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import tw from "twrnc";

// Wrap AdminDashboard with ProtectAdmin
const ProtectedAdminDashboard = ProtectAdmin(AdminDashboard);

export default ProtectedAdminDashboard; // Export the protected component

// AdminDashboard component definition
function AdminDashboard() {
  // navigation
  const navigation = useNavigation<any>();

  // get the accessToken from localStorage
  const accessToken = localStorage.getItem("accessToken");

  // logout handler
  const logoutHandler = () => {
    fetch("http://localhost:5000/api/v1/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(() => {
        localStorage.removeItem("accessToken");
        navigation.navigate("login");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error logging out!");
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
      {/* logout button */}
      <View style={tw`mb-4`}>
        <Button title="Logout" onPress={logoutHandler} />
      </View>

      <ThemedView style={tw`flex-row item-center mb-4`}>
        <ThemedText type="title">Welcome Admin!</ThemedText>
        <HelloWave />
      </ThemedView>
      <View style={tw`mb-4`}>
        <ThemedText>
          Get started by react native with expo and typescript
        </ThemedText>
      </View>

      {/* view the access token */}
      <View style={tw`mb-4`}>
        <ThemedText>Access Token: {accessToken}</ThemedText>
      </View>
    </ParallaxScrollView>
  );
}
