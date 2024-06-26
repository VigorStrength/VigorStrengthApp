import React from "react";
import { icons } from "../constants/icons";
import { TextInput } from "react-native-paper";
import Icon from "./Icon";

type Props = {
  iconName: keyof typeof icons;
  fill?: string;
};

const TextInputIcon = ({ iconName, fill }: Props) => {
  return <TextInput.Icon icon={() => <Icon name={iconName} fill={fill} />} />;
};

export default TextInputIcon;
