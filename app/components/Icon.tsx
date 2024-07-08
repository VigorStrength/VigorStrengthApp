import React from "react";
import { icons } from "../utils/constants/icons";
import { SvgProps } from "react-native-svg";

type Props = SvgProps & {
  name: keyof typeof icons;
};

const Icon = ({ name, ...props }: Props) => {
  const SvgIcon = icons[name];
  return SvgIcon ? <SvgIcon width={24} height={24} {...props} /> : null;
};

export default Icon;
