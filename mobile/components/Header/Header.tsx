import { Heading, View } from "native-base";
import React from "react";
import BackBtn from "../BackBtn/BackBtn";

interface IHeader {
  title?: string;
  hideBackBtn?: boolean;
  subHeader?: string;
}

const Header: React.FC<IHeader> = ({ title, hideBackBtn, subHeader }) => {
  return (
    <View>
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
      <View
        style={{
          marginTop: 6,
          marginLeft: 10,
        }}
      >
        {subHeader && (
          <Heading size={"xs"} color={"white"}>
            {subHeader}
          </Heading>
        )}
      </View>
    </View>
  );
};

export default Header;
