import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

type Props = StackScreenProps<any>;

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>

      <View style={styles.buttons}>
        <Button title="Sign in" buttonStyle={styles.button} onPress={() => navigation.navigate("Sign In")} />
        <Button title="Sign up" type="outline" buttonStyle={styles.button} onPress={() => navigation.navigate("Sign Up")} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttons: {
    flex: 1,
  },

  button: {
    marginTop: 10,
  },
});
