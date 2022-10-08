import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { auth } from "../config/firebase";

const SignInScreen = () => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      const errorString = JSON.stringify(error);
      setValue({
        ...value,
        error: errorString,
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text>Signin screen!</Text>

      {!!value.error && (
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      )}

      <View style={styles.controls}>
        <TextInput placeholder="Email" value={value.email} onChangeText={(text) => setValue({ ...value, email: text })} />
        <TextInput placeholder="Password" value={value.password} onChangeText={(text) => setValue({ ...value, password: text })} />
        <Button title="Sign in" buttonStyle={styles.control} onPress={() => signIn()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  controls: {
    flex: 1,
  },

  control: {
    marginTop: 10,
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: "#fff",
    backgroundColor: "#D54826FF",
  },
});

export default SignInScreen;
