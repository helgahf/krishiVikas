import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = async () => {
    if (!email || !newPassword) {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }

    try {
      // ✅ Find user in Firestore
      const q = query(collection(firestore, "farmers"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        Alert.alert("Error", "No user found with this email.");
        return;
      }

      // ✅ Update password for that user
      querySnapshot.forEach(async (userDoc) => {
        const userRef = doc(firestore, "farmers", userDoc.id);
        await updateDoc(userRef, { password: newPassword });
      });

      Alert.alert("Success", "Password updated successfully!");
      navigation.navigate("Login"); // ✅ go back to login
    } catch (error) {
      console.error("Password Reset Error:", error);
      Alert.alert("Error", "Failed to update password. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Your Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F2E8CF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#386641",
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
    backgroundColor: "#6A994E",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});