import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const BackBtn: React.FC<any> = () => {
  const navigation = useNavigation<any>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ marginLeft: 5 }}>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon size={"2xl"} color="white" as={FontAwesome} name="angle-left" />
      </TouchableOpacity>
    </View>
  );
};

export default BackBtn;
