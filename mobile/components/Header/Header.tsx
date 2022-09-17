import { Heading, View } from "native-base";
import React from "react";
import BackBtn from "../BackBtn/BackBtn";

interface IHeader {
  title?: string;
  hideBackBtn?: boolean;
}

const Header: React.FC<IHeader> = ({ title, hideBackBtn }) => {
  return (
    <View
      style={{
        marginTop: "10%",
        marginLeft: 10,
        display: "flex",
        flexDirection: "row",
      }}
    >
      {!hideBackBtn && <BackBtn />}
      <Heading size={"xl"} color={"white"}>
        {title}
      </Heading>
    </View>
  );
};

export default Header;
