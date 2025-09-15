import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, CircleCheck as CheckCircle, Circle, Clock, Droplets, Sun } from 'lucide-react-native';

export default function RoadmapScreen({ route }) {
  const { cropData } = route.params;// ✅ get data from navigation params

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Farming Roadmap</Text>
          <Text style={styles.subtitle}>{cropData.crop} - Your personalized farming guide</Text>
        </View>

        {/* Current Season */}
        <View style={styles.currentSeasonCard}>
          <View style={styles.seasonHeader}>
            <Text style={styles.seasonTitle}>Current Crop</Text>
            <View style={styles.seasonBadge}>
              <Sun size={16} color="#f2e8cf" />
              <Text style={styles.seasonBadgeText}>Active</Text>
            </View>
          </View>
          <Text style={styles.seasonDates}>{cropData.State.trim()}</Text>
        </View>

        {/* Timeline */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Farming Timeline</Text>

          {/* Completed Task: Soil Preparation */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <CheckCircle size={24} color="#a7c957" />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.taskCard}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>Soil Preparation</Text>
                  <Text style={styles.taskDate}>Recommended</Text>
                </View>
                <Text style={styles.taskDescription}>
                  Soil Type: {cropData["Soil Type"]}
                </Text>
                <View style={styles.taskStatus}>
                  <Text style={styles.completedStatus}>Completed</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Current Task: Nutrient Management */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <Clock size={24} color="#bc4749" />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <View style={[styles.taskCard, styles.currentTask]}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>Nutrient Management</Text>
                  <Text style={styles.taskDate}>Ongoing</Text>
                </View>
                <Text style={styles.taskDescription}>
                  Nutrient Needs: {cropData["Nutrient Needs of the crop"]}
                </Text>
                <Text style={styles.taskDescription}>
                  Recommended Fertilizers: {cropData["Recommended Fertilizers"]}
                </Text>
                <View style={styles.taskStatus}>
                  <Text style={styles.inProgressStatus}>In Progress</Text>
                </View>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Mark Complete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Upcoming Task: Water Requirement */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <Circle size={24} color="#6a994e" />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.taskCard}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>Water Requirement</Text>
                  <Text style={styles.taskDate}>Upcoming</Text>
                </View>
                <Text style={styles.taskDescription}>
                  {cropData["Water Requirement (mm/season)"]} mm per season
                </Text>
                <View style={styles.taskStatus}>
                  <Text style={styles.upcomingStatus}>Upcoming</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Another Task: Growth Period */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <Circle size={24} color="#6a994e" />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.taskCard}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>Growth Period</Text>
                  <Text style={styles.taskDate}>Plan</Text>
                </View>
                <Text style={styles.taskDescription}>
                  Best Sowing Period: {cropData["Best Sowing Period"]}
                </Text>
                <Text style={styles.taskDescription}>
                  Duration: {cropData["Growth Duration (days)"]} days
                </Text>
                <View style={styles.taskStatus}>
                  <Text style={styles.upcomingStatus}>Upcoming</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Harvest Task */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <Circle size={24} color="#6a994e" />
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.taskCard}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>Harvest & Risks</Text>
                  <Text style={styles.taskDate}>Expected</Text>
                </View>
                <Text style={styles.taskDescription}>
                  Expected Yield: {cropData["Expected Yield (kg/acre)"]}
                </Text>
                <Text style={styles.taskDescription}>
                  Pest/Disease Alerts: {cropData["Pest/Disease Alerts"]}
                </Text>
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

// ✅ styles unchanged
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
  }
});
