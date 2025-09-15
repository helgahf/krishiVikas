import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import HomeScreen from "./screens/HomeScreen";
import RoadmapScreen from "./screens/RoadmapScreen";
import SchemesScreen from "./screens/SchemesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RecommendationScreen from "./screens/RecommendationScreen"; // ✅ existing
import LandingPage from "./screens/LandingPage"; // ✅ correct
import BlogScreen from "./screens/BlogScreen"; // ✅ added

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen 
          name="RecommendationScreen" 
          component={RecommendationScreen} 
          options={{ headerShown: false }} 
        />
       <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />

        <Stack.Screen 
          name="Roadmap" 
          component={RoadmapScreen} 
          options={{ title: 'Farming Roadmap' }} 
        />
        <Stack.Screen 
          name="Schemes" 
          component={SchemesScreen} 
          options={{ title: 'Government Schemes' }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="BlogScreen" component={BlogScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
