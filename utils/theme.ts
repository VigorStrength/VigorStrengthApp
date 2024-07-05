import { DefaultTheme } from "react-native-paper";
import { Colors } from "../GlobalStyles";

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.orange100,
    onSurfaceVariant: Colors.neutral350,
    background: Colors.neutralGradient,
  },
};

export default DarkTheme;
