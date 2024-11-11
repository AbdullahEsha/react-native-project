// make a wrapper function to protect the admin route
import { useNavigation } from "@react-navigation/native";
import { FC } from "react";

export const ProtectAdmin = (Component: FC) => {
  return function ProtectedComponent() {
    const navigation = useNavigation<any>();

    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      navigation.navigate("login");
      return null;
    }

    return <Component />;
  };
};
