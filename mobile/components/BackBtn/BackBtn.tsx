import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

const BackBtn: React.FC<any> = () => {
  const navigation = useNavigation<any>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ marginTop: "20%" }}>
      <TouchableOpacity onPress={handleGoBack}>
        <Text color={"white"}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackBtn;
