import React from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "react-native-elements";
import "./config/firebase";
import RootNavigation from "./navigation";

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
