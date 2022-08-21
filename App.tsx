import React, { useCallback } from "react";

import { Welcome } from "./src/screens/Welcome";

import * as SplashScreen from "expo-splash-screen";

import theme from "./src/styles/theme";

import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold
 } from '@expo-google-fonts/jost';
import { ThemeProvider } from "styled-components";

export const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) {
    return null;
  }

  return(
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  )
};