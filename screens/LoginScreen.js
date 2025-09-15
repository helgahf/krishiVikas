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
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase"; // ✅ Firestore instance
import profileIcon from "../assets/krishiLOGO.jpg";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      const q = query(collection(firestore, "farmers"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        Alert.alert("Error", "No user found with this email.");
        return;
      }

      let userData = null;
      let passwordIncorrect = false; // A flag to track if we found the user but the password was wrong

      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        
        // --- DEBUGGING LOGS ---
        // Let's see exactly what we're comparing
        console.log("Password from Input:", password);
        console.log("Password from DB:", data.password);
        // --- END DEBUGGING ---

        if (data.password === password) {
          userData = { id: docSnap.id, ...data };
        } else {
          // If we find the user but the password doesn't match, set the flag
          passwordIncorrect = true;
        }
      });

      if (userData) {
        Alert.alert("Success", "Login Successful!");
        navigation.navigate("Landing", { user: userData });
      } else if (passwordIncorrect) {
        Alert.alert("Error", "Incorrect password.");
      } else {
        // This case should not be hit if the email query works, but it's good practice
        Alert.alert("Error", "An unknown error occurred.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      Alert.alert("Error", "Failed to login. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword"); // ✅ Go to ForgotPasswordScreen
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2E8CF" }}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{ flex: 1 }} />
        <Image source={profileIcon} style={styles.iconImage} resizeMode="contain" />
      </View>

      {/* LOGIN FORM */}
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