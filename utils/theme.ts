import { DefaultTheme } from "react-native-paper";
import { Colors } from "../GlobalStyles";

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.orange100,
    secondary: Colors.neutral400,
    tertiary: Colors.green100,
    background: Colors.neutralGradient,
    surface: Colors.neutralGradient,
    onPrimary: Colors.neutralGradient,
    onSecondary: Colors.neutralGradient,
    onTertiary: Colors.neutralGradient,
    onSurface: Colors.orange100,
    onSurfaceVariant: Colors.neutral350,
  },
};

export default DarkTheme;
