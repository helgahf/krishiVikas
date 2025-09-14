import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Edit, MapPin, Phone, Mail, LogOut, Settings, HelpCircle, Calendar, DollarSign } from 'lucide-react-native';

// This screen needs the navigation prop to move to other screens
export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <View style={styles.avatar}>
              <User size={48} color="#f2e8cf" />
            </View>
            <View style={styles.userDetails}>
              <Text style={styles.userName}>Ramesh Kumar</Text>
              <Text style={styles.userType}>Verified Farmer</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Edit size={20} color="#386641" />
          </TouchableOpacity>
        </View>

        {/* --- NEW SECTION: Quick Access --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <View style={styles.quickAccessContainer}>
            <TouchableOpacity style={styles.quickAccessCard} onPress={() => navigation.navigate('Roadmap')}>
              <Calendar size={24} color="#386641" />
              <Text style={styles.quickAccessText}>My Farming Roadmap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickAccessCard} onPress={() => navigation.navigate('Schemes')}>
              <DollarSign size={24} color="#386641" />
              <Text style={styles.quickAccessText}>Government Schemes</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <MapPin size={20} color="#6a994e" />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Location</Text>
                <Text style={styles.infoValue}>Village Kharadi, Pune, Maharashtra</Text>
              </View>
            </View>
            
            <View style={styles.infoRow}>
              <Phone size={20} color="#6a994e" />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Phone</Text>
                <Text style={styles.infoValue}>+91 98765 43210</Text>
              </View>
            </View>
            
            <View style={styles.infoRow}>
              <Mail size={20} color="#6a994e" />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Email</Text>
                <Text style={styles.infoValue}>ramesh.kumar@email.com</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Farm Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Farm Details</Text>
          
          <View style={styles.farmCard}>
            <View style={styles.farmRow}>
              <Text style={styles.farmLabel}>Total Land</Text>
              <Text style={styles.farmValue}>5.2 acres</Text>
            </View>
            
            <View style={styles.farmRow}>
              <Text style={styles.farmLabel}>Current Crop</Text>
              <Text style={styles.farmValue}>Tomatoes (Kharif 2024)</Text>
            </View>
            
            <View style={styles.farmRow}>
              <Text style={styles.farmLabel}>Farming Experience</Text>
              <Text style={styles.farmValue}>12 years</Text>
            </View>
            
            <View style={styles.farmRow}>
              <Text style={styles.farmLabel}>Farming Type</Text>
              <Text style={styles.farmValue}>Mixed Farming</Text>
            </View>
          </View>
        </View>

        {/* --- REMOVED "Not Signed In" Section --- */}

        {/* App Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          <View style={styles.settingsCard}>
            <TouchableOpacity style={styles.settingRow}>
              <Settings size={20} color="#6a994e" />
              <Text style={styles.settingText}>App Preferences</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingRow}>
              <HelpCircle size={20} color="#6a994e" />
              <Text style={styles.settingText}>Help & Support</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingRow} onPress={() => navigation.navigate('Home')}>
              <LogOut size={20} color="#bc4749" />
              <Text style={[styles.settingText, styles.logoutText]}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appName}>Krishi Vikas</Text>
          <Text style={styles.appVersion}>Version 1.0.0</Text>
          <Text style={styles.appDescription}>
            Smart farming solutions for better crop decisions
          </Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6a994e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  userDetails: {},
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#386641',
  },
  userType: {
    fontSize: 16,
    color: '#6a994e',
    marginTop: 4,
  },
  editButton: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
  quickAccessContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  quickAccessCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    gap: 8,
  },
  quickAccessText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#386641',
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContent: {
    marginLeft: 16,
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#6a994e',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#386641',
  },
  farmCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    gap: 16,
  },
  farmRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  farmLabel: {
    fontSize: 16,
    color: '#6a994e',
  },
  farmValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#386641',
  },
  settingsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  settingText: {
    fontSize: 16,
    color: '#386641',
    marginLeft: 16,
  },
  logoutText: {
    color: '#bc4749',
  },
  appInfo: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#386641',
  },
  appVersion: {
    fontSize: 14,
    color: '#6a994e',
    marginTop: 4,
  },
  appDescription: {
    fontSize: 14,
    color: '#6a994e',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },
});
