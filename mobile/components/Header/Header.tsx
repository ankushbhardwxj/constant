import { Heading } from "native-base";
import React from "react";

interface IHeader {
  title?: string;
}

const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <Heading size={"xl"} color={"white"} marginTop={"16"} marginLeft={"3"}>
      {title}
    </Heading>
  );
};

export default Header;
