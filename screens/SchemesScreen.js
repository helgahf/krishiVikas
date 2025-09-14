import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DollarSign, CheckCircle, ExternalLink, Calendar, MapPin } from 'lucide-react-native';

export default function SchemesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Government Schemes</Text>
          <Text style={styles.subtitle}>Financial support & subsidies for farmers</Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Available Schemes</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>₹2.5L</Text>
            <Text style={styles.statLabel}>Max Subsidy</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Eligible For</Text>
          </View>
        </View>

        {/* Eligible Schemes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>You're Eligible For</Text>
          
          <View style={styles.schemeCard}>
            <View style={styles.schemeHeader}>
              <View style={styles.schemeInfo}>
                <Text style={styles.schemeName}>PM-KISAN</Text>
                <Text style={styles.schemeAmount}>₹6,000/year</Text>
              </View>
              <View style={styles.eligibleBadge}>
                <CheckCircle size={16} color="white" />
                <Text style={styles.eligibleText}>Eligible</Text>
              </View>
            </View>
            
            <Text style={styles.schemeDescription}>
              Direct income support to all landholding farmers' families
            </Text>
            
            <View style={styles.schemeDetails}>
              <View style={styles.detailRow}>
                <DollarSign size={14} color="#6a994e" />
                <Text style={styles.detailText}>₹2,000 per installment (3 times/year)</Text>
              </View>
              <View style={styles.detailRow}>
                <Calendar size={14} color="#6a994e" />
                <Text style={styles.detailText}>Next payment: September 2024</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply Now</Text>
              <ExternalLink size={16} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.schemeCard}>
            <View style={styles.schemeHeader}>
              <View style={styles.schemeInfo}>
                <Text style={styles.schemeName}>Kisan Credit Card</Text>
                <Text style={styles.schemeAmount}>Up to ₹3 Lakh</Text>
              </View>
              <View style={styles.eligibleBadge}>
                <CheckCircle size={16} color="white" />
                <Text style={styles.eligibleText}>Eligible</Text>
              </View>
            </View>
            
            <Text style={styles.schemeDescription}>
              Easy access to credit for farming activities at subsidized interest rates
            </Text>
            
            <View style={styles.schemeDetails}>
              <View style={styles.detailRow}>
                <DollarSign size={14} color="#6a994e" />
                <Text style={styles.detailText}>4% interest rate for timely repayment</Text>
              </View>
              <View style={styles.detailRow}>
                <MapPin size={14} color="#6a994e" />
                <Text style={styles.detailText}>Based on cropping pattern & scale</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply Now</Text>
              <ExternalLink size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* All Schemes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Government Schemes</Text>
          
          <View style={styles.allSchemeCard}>
            <View style={styles.allSchemeHeader}>
              <Text style={styles.allSchemeName}>Pradhan Mantri Fasal Bima Yojana</Text>
              <View style={styles.notEligibleBadge}>
                <Text style={styles.notEligibleText}>Not Eligible</Text>
              </View>
            </View>
            <Text style={styles.allSchemeDescription}>Crop insurance scheme for farmers</Text>
            <Text style={styles.eligibilityReason}>Reason: Already enrolled in state scheme</Text>
          </View>

          <View style={styles.allSchemeCard}>
            <View style={styles.allSchemeHeader}>
              <Text style={styles.allSchemeName}>Soil Health Card Scheme</Text>
              <View style={styles.eligibleBadge}>
                <CheckCircle size={16} color="white" />
                <Text style={styles.eligibleText}>Eligible</Text>
              </View>
            </View>
            <Text style={styles.allSchemeDescription}>Free soil testing and health card</Text>
            <TouchableOpacity style={styles.learnMoreButton}>
              <Text style={styles.learnMoreText}>Learn More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.allSchemeCard}>
            <View style={styles.allSchemeHeader}>
              <Text style={styles.allSchemeName}>Paramparagat Krishi Vikas Yojana</Text>
              <View style={styles.eligibleBadge}>
                <CheckCircle size={16} color="white" />
                <Text style={styles.eligibleText}>Eligible</Text>
              </View>
            </View>
            <Text style={styles.allSchemeDescription}>Organic farming promotion scheme</Text>
            <TouchableOpacity style={styles.learnMoreButton}>
              <Text style={styles.learnMoreText}>Learn More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.allSchemeCard}>
            <View style={styles.allSchemeHeader}>
              <Text style={styles.allSchemeName}>National Mission for Sustainable Agriculture</Text>
              <View style={styles.notEligibleBadge}>
                <Text style={styles.notEligibleText}>Not Eligible</Text>
              </View>
            </View>
            <Text style={styles.allSchemeDescription}>Sustainable agriculture practices support</Text>
            <Text style={styles.eligibilityReason}>Reason: Minimum 2 hectare land required</Text>
          </View>
        </View>

        {/* Help Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Need Help?</Text>
          <View style={styles.helpCard}>
            <Text style={styles.helpTitle}>Application Assistance</Text>
            <Text style={styles.helpDescription}>
              Get help with scheme applications and eligibility checks
            </Text>
            <TouchableOpacity style={styles.helpButton}>
              <Text style={styles.helpButtonText}>Contact Support</Text>
            </TouchableOpacity>
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
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  statCard: {
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
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#386641',
  },
  statLabel: {
    fontSize: 12,
    color: '#6a994e',
    marginTop: 4,
    textAlign: 'center',
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
  schemeCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  schemeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  schemeInfo: {},
  schemeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#386641',
  },
  schemeAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#bc4749',
    marginTop: 2,
  },
  eligibleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a7c957',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  eligibleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 4,
  },
  schemeDescription: {
    fontSize: 14,
    color: '#6a994e',
    lineHeight: 20,
    marginBottom: 16,
  },
  schemeDetails: {
    marginBottom: 16,
    gap: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 13,
    color: '#6a994e',
    marginLeft: 8,
  },
  applyButton: {
    backgroundColor: '#386641',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  allSchemeCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  allSchemeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  allSchemeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#386641',
    flex: 1,
    marginRight: 12,
  },
  allSchemeDescription: {
    fontSize: 14,
    color: '#6a994e',
    marginBottom: 8,
  },
  notEligibleBadge: {
    backgroundColor: '#f2e8cf',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#bc4749',
  },
  notEligibleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#bc4749',
  },
  eligibilityReason: {
    fontSize: 12,
    color: '#bc4749',
    fontStyle: 'italic',
  },
  learnMoreButton: {
    alignSelf: 'flex-start',
  },
  learnMoreText: {
    fontSize: 14,
    color: '#386641',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  helpCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  helpTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#386641',
    marginBottom: 8,
  },
  helpDescription: {
    fontSize: 14,
    color: '#6a994e',
    marginBottom: 16,
    lineHeight: 20,
  },
  helpButton: {
    backgroundColor: '#6a994e',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  helpButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});
