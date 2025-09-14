import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profileIcon from "../assets/krishiLOGO.jpg";

export default function HomeScreen({ navigation }) {
  const stats = [
    { number: "50K+", label: "Active Farmers" },
    { number: "200+", label: "Crop Varieties" },
    { number: "85%", label: "Success Rate" },
    { number: "₹2Cr+", label: "Farmer Earnings" },
  ];

  const features = [
    { title: "Farming Roadmap", description: "Step-by-step guidance for successful cultivation" },
    { title: "Government Schemes", description: "Access to monetary schemes and subsidies" },
    { title: "Knowledge Hub", description: "Expert insights and farming tips" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2E8CF" }}>
      {/* Top Header with padding down */}
      <View style={styles.header}>
        <Image source={profileIcon} style={styles.headerIcon} resizeMode="contain" />
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.topButtonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.topButton, { backgroundColor: "#6A994E" }]} onPress={() => navigation.navigate("Register")}>
            <Text style={[styles.topButtonText, { color: "#fff" }]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Grow Smart, Earn More</Text>
          <Text style={styles.heroSubtitle}>
            Krishi Vikas helps farmers make data-driven decisions with market-based crop recommendations,
            farming guidance, and access to government schemes.
          </Text>
          {/* --- "Start Your Journey" Button Removed From Here --- */}
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statsRow}>
            {stats.slice(0, 2).map((stat, i) => (
              <View key={i} style={styles.statItem}>
                <Text style={styles.statNumber}>{stat.number}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
          <View style={styles.statsRow}>
            {stats.slice(2, 4).map((stat, i) => (
              <View key={i} style={styles.statItem}>
                <Text style={styles.statNumber}>{stat.number}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Features Section (This will now render only 3 items) */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Empowering Farmers with Technology</Text>
          {features.map((feature, i) => (
            <View key={i} style={styles.featureItem}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
          ))}
        </View>

        {/* Problem & Solution Section */}
        <View style={styles.problemSection}>
          <Text style={styles.sectionTitle}>The Problem We Solve</Text>
          <Text style={styles.sectionText}>
            Farmers often struggle to choose crops that will sell well, leading to low income and wasted effort. Most apps don't tell farmers what the market actually needs.
          </Text>

          <Text style={[styles.sectionText, { fontWeight: "bold", marginTop: 5 }]}>
            Our Solution
          </Text>
          <Text style={styles.sectionText}>
            Krishi Vikas recommends crops based on current demand and profitability, helping farmers grow what people want. Easy-to-follow farming plans, weather updates, and government schemes guide them to smarter decisions.
          </Text>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Transform Your Farming?</Text>
          <Text style={styles.ctaSubtitle}>
            Join thousands of farmers who have increased their income with smart farming decisions
          </Text>
          <TouchableOpacity
            style={[styles.ctaButton, { backgroundColor: "#BC4749", marginTop: 10 }]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.ctaText}>Start Your Journey</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#A7C957",
  },
  headerIcon: { width: 150, height: 40 },
  headerRight: { flexDirection: "row", alignItems: "center" },
  topButton: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: "#F2E8CF", marginRight: 10, borderRadius: 5 },
  topButtonText: { fontSize: 12, color: "#386641", fontWeight: "bold" },
  
  heroSection: { backgroundColor: "#386641", padding: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  heroTitle: { color: "#F2E8CF", fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  heroSubtitle: { color: "#F2E8CF", fontSize: 16, marginBottom: 15 },
  ctaButton: { backgroundColor: "#6A994E", padding: 12, borderRadius: 10, alignItems: "center" },
  ctaText: { color: "#fff", fontWeight: "bold" },

  statsSection: { padding: 20, backgroundColor: "#fff" },
  statsRow: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
  statItem: { alignItems: "center" },
  statNumber: { fontSize: 20, fontWeight: "bold", color: "#386641" },
  statLabel: { fontSize: 12, color: "#6A994E" },

  featuresSection: { padding: 20, backgroundColor: "#F2E8CF" },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#386641", marginBottom: 10, textAlign: "center" },
  featureItem: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 10 },
  featureTitle: { fontWeight: "bold", color: "#386641" },
  featureDescription: { color: "#6A994E" },

  problemSection: { padding: 20, backgroundColor: "#fff" },
  sectionText: { fontSize: 14, color: "#6A994E", marginBottom: 5 },

  ctaSection: { padding: 20, backgroundColor: "#386641", alignItems: "center", borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  ctaTitle: { fontSize: 22, fontWeight: "bold", color: "#F2E8CF", marginBottom: 5, textAlign: "center" },
  ctaSubtitle: { fontSize: 14, color: "#F2E8CF", textAlign: "center", marginBottom: 10 },
});
