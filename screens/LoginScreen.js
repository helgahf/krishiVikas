import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import profileIcon from "../assets/krishiLOGO.jpg";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    // --- CHANGE: Navigate to Profile instead of Roadmap ---
    navigation.navigate("Profile");
  };

  const handleForgotPassword = () => {
    Alert.alert("Forgot Password", "This is a placeholder action.");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2E8CF" }}>
      <View style={styles.header}>
        <View style={{ flex: 1 }} />
        <Image source={profileIcon} style={styles.iconImage} resizeMode="contain" />
      </View>

      <View style={styles.container}>
        <Text style={styles.pageTitle}>Welcome Back</Text>
        <Text style={styles.subtitle}>Log in to continue smart farming</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerLink}>Register here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#A7C957",
  },
  iconImage: {
    width: 150,
    height: 60,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#386641",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#6A994E",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#A7C957",
  },
  button: {
    width: "100%",
    backgroundColor: "#386641",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgotPassword: {
    color: "#BC4749",
    marginTop: 15,
    textDecorationLine: "underline",
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  registerText: {
    color: "#386641",
    fontSize: 14,
  },
  registerLink: {
    color: "#386641",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
