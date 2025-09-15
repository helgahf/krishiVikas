import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import cropDataJson from "../assets/Recommend_crop.json";

const { width } = Dimensions.get("window");

export default function RecommendationScreen({ route, navigation }) {
  const { userState, userCrop } = route.params;
  const [filteredCrops, setFilteredCrops] = useState([]);

  useEffect(() => {
    const cropArray = cropDataJson["Sheet1 (3)"];
    const filtered = cropArray.filter(crop =>
      crop.State.trim().toLowerCase().includes(userState.trim().toLowerCase())
    );

    if (userCrop && userCrop.trim() !== "") {
      filtered.sort(c =>
        c.crop.toLowerCase().includes(userCrop.trim().toLowerCase()) ? -1 : 1
      );
    }

    setFilteredCrops(filtered.slice(0, 10)); // top 10
  }, []);

  const handleCropPress = (crop) => {
    navigation.navigate("Roadmap", { cropData: crop }); // ✅ Pass as cropData
  };

  const colors = [
    ["#FFB347", "#FFCC33"],
    ["#6A11CB", "#2575FC"],
    ["#FF512F", "#DD2476"],
    ["#1D976C", "#93F9B9"],
    ["#FF7E5F", "#FEB47B"],
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2E8CF" }}>
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>🌾 Top Recommendations</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 20 }}>
        {filteredCrops.length === 0 && (
          <Text style={styles.noData}>No crops found for your state.</Text>
        )}

        {filteredCrops.map((crop, index) => {
          const colorPair = colors[index % colors.length];
          return (
            <TouchableOpacity
              key={index}
              style={[styles.card, { backgroundColor: colorPair[0] }]}
              onPress={() => handleCropPress(crop)}
              activeOpacity={0.8}
            >
              <Text style={styles.rank}>#{index + 1}</Text>
              <Text style={styles.cropName}>{crop.crop}</Text>
              <Text style={styles.state}>State: {crop.State.trim()}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 26, fontWeight: "bold", color: "#386641" },
  card: {
    width: width - 30,
    height: 150,
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  rank: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  cropName: { fontSize: 20, fontWeight: "bold", color: "#fff", marginTop: 5 },
  state: { fontSize: 16, color: "#fff", marginTop: 3 },
  noData: { fontSize: 16, color: "#6A994E", marginTop: 20, textAlign: "center" },
});
