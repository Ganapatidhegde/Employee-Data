/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import useGlobal from "../../redux";

const [dark, lightGrey, errorColor] = ["#000", "#ccc", "#ff0033"];

const Login = ({ navigation }) => {
  const [globalState] = useGlobal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationText, setValidationText] = useState(null);

  const handleLogIn = () => {
    if (email.trim() === "" || password.trim() === "") {
      setValidationText("Please fill in all the details");
    } else if (email !== globalState.logInData.username) {
      setValidationText("Please enter valid email id");
    } else if (password !== globalState.logInData.password) {
      setValidationText("Please enter valid password");
    } else {
      navigation.navigate("Employee Details");
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : null} rr>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginPageContainer}>
          <Text style={styles.loginPageText}>LOGIN</Text>

          {/* Email field */}
          <View style={styles.inputFieldContainer}>
            <TextInput
              placeholderTextColor={dark}
              style={styles.input}
              value={email}
              onChangeText={(val) => {
                setEmail(val);
              }}
              placeholder="Email"
            />
          </View>
          {/* Email field ends */}

          {/* Password field */}
          <View style={styles.inputFieldContainer}>
            <TextInput
              placeholderTextColor={dark}
              style={styles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={(val) => {
                setPassword(val);
              }}
              placeholder="Password"
            />
          </View>
          {/* Password field ends */}

          {validationText !== "" && (
            <Text style={styles.validationText}>{validationText}</Text>
          )}
          {/* Button */}
          <View style={styles.buttonContainer}>
            <Button
              title="LOGIN"
              onPress={() => {
                handleLogIn();
              }}
            />
          </View>
          {/* Button */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  loginPageText: {
    fontSize: 32,
    marginBottom: 16,
  },
  validationText: {
    color: errorColor,
    fontSize: 12,
    marginVertical: 16,
  },
  input: {
    fontSize: 16,
    color: "#000",
  },
  loginPageContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputFieldContainer: {
    width: "80%",
    borderBottomWidth: 1,
    borderColor: lightGrey,
    marginVertical: 16,
  },
  buttonContainer: {
    width: "80%",
  },
});

export default Login;
