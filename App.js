import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import all screens from both your work and your teammate's
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import HomeScreen from "./screens/HomeScreen";
import RoadmapScreen from "./screens/RoadmapScreen";
import SchemesScreen from "./screens/SchemesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LandingPage from "./screens/LandingPage";
import BlogScreen from "./screens/BlogScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        {/* --- This is the final, combined list of all screens --- */}

        {/* From both versions */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

        {/* From your stashed changes */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: false }} />

        {/* From your teammate's changes */}
        <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
        
        {/* From both versions (we only need one) */}
        <Stack.Screen name="Roadmap" component={RoadmapScreen} options={{ title: "Farming Roadmap" }} />
        
        {/* From your stashed changes */}
        <Stack.Screen name="Schemes" component={SchemesScreen} options={{ title: "Government Schemes" }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: "Reset Password" }} />
        <Stack.Screen name="BlogScreen" component={BlogScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

