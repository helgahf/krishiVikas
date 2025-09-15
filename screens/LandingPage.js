import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Example user data
const user = {
  name: "John Doe",
  location: "Punjab",
  farmSize: "5 Acres",
  crops: ["Wheat", "Rice"],
  email: "john@example.com",
  phone: "9876543210",
};

export default function LandingPage({ navigation }) {
  const weatherData = {
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    forecast: [
      { day: "Today", temp: "28°C", condition: "Partly Cloudy" },
      { day: "Tomorrow", temp: "31°C", condition: "Sunny" },
      { day: "Wed", temp: "29°C", condition: "Rain" },
      { day: "Thu", temp: "26°C", condition: "Cloudy" },
    ],
  };

  const recentActivity = [
    { action: "Viewed Rice recommendations", time: "2 hours ago" },
    { action: "Applied for PM-KISAN scheme", time: "1 day ago" },
    { action: "Read article on pest control", time: "2 days ago" },
    { action: "Updated farm profile", time: "3 days ago" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Profile and Chat buttons */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Krishi Vikas</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text style={styles.headerButtonText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => navigation.navigate("Chat")}
          >
            <Text style={styles.headerButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Welcome Section */}
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeText}>Welcome back, {user.name}!</Text>
          <Text style={styles.subtitle}>
            Ready to make smart farming decisions today?
          </Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoItem}>Location: {user.location}</Text>
            <Text style={styles.infoItem}>Farm Size: {user.farmSize}</Text>
            <Text style={styles.infoItem}>
              Crops: {user.crops.length > 0 ? user.crops.join(", ") : "Not specified"}
            </Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate("RecommendationScreen")}
          >
            <Text style={styles.actionTitle}>Get Recommendations</Text>
            <Text style={styles.actionDesc}>Discover profitable crops for your region</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate("Roadmap")}
          >
            <Text style={styles.actionTitle}>View Roadmap</Text>
            <Text style={styles.actionDesc}>Follow your farming timeline</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate("Schemes")}
          >
            <Text style={styles.actionTitle}>Browse Schemes</Text>
            <Text style={styles.actionDesc}>Find government funding opportunities</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate("BlogScreen")}
          >
            <Text style={styles.actionTitle}>Read Blog</Text>
            <Text style={styles.actionDesc}>Latest farming insights and tips</Text>
          </TouchableOpacity>
        </View>

        {/* Weather Section */}
        <Text style={styles.sectionTitle}>Weather Forecast</Text>
        <View style={styles.weatherBox}>
          <View style={styles.weatherRow}>
            <Text style={styles.weatherTitle}>Temperature</Text>
            <Text style={styles.weatherData}>{weatherData.temperature}°C</Text>
          </View>
          <View style={styles.weatherRow}>
            <Text style={styles.weatherTitle}>Humidity</Text>
            <Text style={styles.weatherData}>{weatherData.humidity}%</Text>
          </View>
          <View style={styles.weatherRow}>
            <Text style={styles.weatherTitle}>Wind Speed</Text>
            <Text style={styles.weatherData}>{weatherData.windSpeed} km/h</Text>
          </View>
          <View style={styles.forecastContainer}>
            {weatherData.forecast.map((day, index) => (
              <View key={index} style={styles.forecastItem}>
                <Text style={styles.forecastDay}>{day.day}</Text>
                <Text style={styles.forecastTemp}>{day.temp}</Text>
                <Text style={styles.forecastCondition}>{day.condition}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityBox}>
          {recentActivity.map((activity, index) => (
            <View key={index} style={styles.activityItem}>
              <Text style={styles.activityAction}>{activity.action}</Text>
              <Text style={styles.activityTime}>{activity.time}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2E8CF" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#386641",
    padding: 15,
  },
  headerTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  headerButtons: {
    flexDirection: "row",
  },
  headerButton: {
    marginLeft: 10,
    backgroundColor: "#A7C957",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  headerButtonText: {
    color: "#386641",
    fontSize: 14,
    fontWeight: "bold",
  },
  scrollContainer: { padding: 16 },
  welcomeBox: {
    backgroundColor: "#386641",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    color: "#E0F2F1",
    fontSize: 14,
    marginBottom: 10,
  },
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoItem: {
    color: "#fff",
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#386641",
    marginBottom: 10,
  },
  actionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#386641",
    marginBottom: 4,
  },
  actionDesc: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  weatherBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  weatherRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  weatherTitle: {
    fontSize: 14,
    color: "#555",
  },
  weatherData: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#386641",
  },
  forecastContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forecastItem: {
    alignItems: "center",
    padding: 8,
  },
  forecastDay: {
    fontSize: 12,
    color: "#555",
  },
  forecastTemp: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#386641",
  },
  forecastCondition: {
    fontSize: 12,
    color: "#777",
  },
  activityBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  activityItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 8,
  },
  activityAction: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  activityTime: {
    fontSize: 12,
    color: "#999",
  },
});
