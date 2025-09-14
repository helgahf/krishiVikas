import React from 'react';
import { useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, CircleCheck as CheckCircle, Circle, Clock, Droplets, Sun } from 'lucide-react-native';

export default function RoadmapScreen() {
  const route = useRoute();
  const { userState } = route.params || {}; // 👈 get passed state

  console.log("🚀 Roadmap received state:", userState);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Farming Roadmap</Text>
          <Text style={styles.subtitle}>Your personalized farming calendar</Text>
        </View>

        {/* Current Season */}
        <View style={styles.currentSeasonCard}>
          <View style={styles.seasonHeader}>
            <Text style={styles.seasonTitle}>Current Season - Kharif 2025</Text>
            <View style={styles.seasonBadge}>
              <Sun size={16} color="#f2e8cf" />
              <Text style={styles.seasonBadgeText}>Active</Text>
            </View>
          </View>
          <Text style={styles.seasonDates}>June - October, {userState?.toUpperCase()}</Text>

        </View>

        {/* Timeline */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Farming Timeline</Text>
          
          {/* Completed Task */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <CheckCircle size={24} color="#a7c957" />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.taskCard}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>Land Preparation</Text>
                  <Text style={styles.taskDate}>June 15, 2024</Text>
                </View>
                <Text style={styles.taskDescription}>
                  Soil testing, plowing, and fertilizer application completed
                </Text>
                <View style={styles.taskStatus}>
                  <Text style={styles.completedStatus}>Completed</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Current Task */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <Clock size={24} color="#bc4749" />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <View style={[styles.taskCard, styles.currentTask]}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>Sowing & Planting</Text>
                  <Text style={styles.taskDate}>July 1-15, 2024</Text>
                </View>
                <Text style={styles.taskDescription}>
                  Plant tomato seeds with proper spacing and irrigation setup
                </Text>
                <View style={styles.taskDetails}>
                  <View style={styles.detailItem}>
                    <Droplets size={14} color="#6a994e" />
                    <Text style={styles.detailText}>Water: 2-3 times/week</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Sun size={14} color="#6a994e" />
                    <Text style={styles.detailText}>Sunlight: 6-8 hours</Text>
                  </View>
                </View>
                <View style={styles.taskStatus}>
                  <Text style={styles.inProgressStatus}>In Progress</Text>
                </View>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Mark Complete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Upcoming Task */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <Circle size={24} color="#6a994e" />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.taskCard}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>First Fertilizer Application</Text>
                  <Text style={styles.taskDate}>July 30, 2024</Text>
                </View>
                <Text style={styles.taskDescription}>
                  Apply NPK fertilizer and organic compost for healthy growth
                </Text>
                <View style={styles.taskStatus}>
                  <Text style={styles.upcomingStatus}>Upcoming</Text>
                </View>
              </View>
            </View>
          </View>

          {/* ... other tasks can be added here ... */}

          {/* Harvest Task */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <Circle size={24} color="#6a994e" />
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.taskCard}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>Harvest Time</Text>
                  <Text style={styles.taskDate}>September 20-30, 2024</Text>
                </View>
                <Text style={styles.taskDescription}>
                  Harvest mature tomatoes when they reach optimal ripeness
                </Text>
                <Text style={styles.expectedYield}>Expected Yield: 12-15 tons/acre</Text>
                <View style={styles.taskStatus}>
                  <Text style={styles.upcomingStatus}>Upcoming</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2e8cf',
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#386641',
  },
  subtitle: {
    fontSize: 16,
    color: '#6a994e',
    marginTop: 4,
  },
  currentSeasonCard: {
    backgroundColor: '#6a994e',
    margin: 20,
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  seasonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  seasonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f2e8cf',
  },
  seasonBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#386641',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  seasonBadgeText: {
    color: '#f2e8cf',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  seasonDates: {
    color: '#f2e8cf',
    fontSize: 14,
    opacity: 0.9,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#386641',
    marginBottom: 16,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timelineLeft: {
    alignItems: 'center',
    width: 40,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#a7c957',
    marginTop: 8,
  },
  timelineContent: {
    flex: 1,
    marginLeft: 16,
  },
  taskCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  currentTask: {
    borderWidth: 2,
    borderColor: '#bc4749',
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#386641',
  },
  taskDate: {
    fontSize: 12,
    color: '#6a994e',
  },
  taskDescription: {
    fontSize: 14,
    color: '#6a994e',
    lineHeight: 20,
    marginBottom: 12,
  },
  taskDetails: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 12,
    color: '#6a994e',
    marginLeft: 4,
  },
  taskStatus: {
    marginBottom: 12,
  },
  completedStatus: {
    backgroundColor: '#a7c957',
    color: '#386641',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  inProgressStatus: {
    backgroundColor: '#bc4749',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  upcomingStatus: {
    backgroundColor: '#f2e8cf',
    color: '#6a994e',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6a994e',
    alignSelf: 'flex-start',
  },
  actionButton: {
    backgroundColor: '#386641',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  expectedYield: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#a7c957',
    marginBottom: 8,
  },
  nextSeasonCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  nextSeasonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#386641',
    marginBottom: 4,
  },
  nextSeasonDates: {
    fontSize: 14,
    color: '#6a994e',
    marginBottom: 8,
  },
  nextSeasonCrops: {
    fontSize: 14,
    color: '#6a994e',
    marginBottom: 16,
  },
  planButton: {
    backgroundColor: '#386641',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  planButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});