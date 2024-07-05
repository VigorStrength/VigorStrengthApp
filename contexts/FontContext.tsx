import { View, Text } from "react-native";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import * as Font from "expo-font";

type FontContextType = {
  fontLoaded: boolean;
};
type Props = {
  children: ReactNode;
};

const FontContext = createContext<FontContextType>({ fontLoaded: false });

const FontProvider = ({ children }: Props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Satoshi: require("../assets/fonts/Satoshi/Satoshi-Regular.otf"),
        SatoshiBold: require("../assets/fonts/Satoshi/Satoshi-Medium.otf"),
        SatoshiStrong: require("../assets/fonts/Satoshi/Satoshi-Bold.otf"),
        IntegralCF: require("../assets/fonts/Integral-CF/Fontspring-DEMO-integralcf-regular.otf"),
        "IntegralCF-Bold": require("../assets/fonts/Integral-CF/Fontspring-DEMO-integralcf-medium.otf"),
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  return (
    <FontContext.Provider value={{ fontLoaded }}>
      {children}
    </FontContext.Provider>
  );
};

const useFont = () => {
  const context = useContext(FontContext);

  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }

  return context;
};

export { FontProvider, useFont };
