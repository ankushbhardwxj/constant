import React from "react";
import { View } from "react-native";
import Header from "../../components/Header/Header";

interface ILegacyScreenProps {}

const LegacyScreen: React.FC<ILegacyScreenProps> = () => {
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <Header title="Legacy" hideBackBtn />
    </View>
  );
};

export default LegacyScreen;
