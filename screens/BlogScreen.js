import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, Eye, ThumbsUp, Bookmark, Share2 } from 'lucide-react-native';
import { Linking } from 'react-native';

const articles = [
  {
  title: "Coffee growers worry as EU's deforestation rule looms",
    category: 'FARMING NEWS',
    excerpt: 'Thousands of farmers in Karnataka are seeking compensation for crop losses due to unseasonal rains...',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=300',
    url: 'https://timesofindia.indiatimes.com/city/bengaluru/coffee-growers-worry-aseus-deforestation-rule-looms/articleshow/123886529.cms?utm_source=chatgpt.com',
    time: '3 min',
    views: '1.2k',
  },
  {
    title: "Second phase of 'Viksit Krishi Sankalp Abhiyan' to begin under the leadership of Union Agriculture Minister Shri Shivraj Singh Chouhan",
    category: 'NEWS',
    excerpt: "After the tremendous success of the first phase of the 'Viksit Krishi Sankalp Abhiyan,' the second phase of the campaign is set to begin under ",
    image: 'https://images.pexels.com/photos/209289/pexels-photo-209289.jpeg?auto=compress&cs=tinysrgb&w=300',
    url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2166308&utm_source=chatgpt.com',
    time: '4 min',
    views: '900',
  },
  {
    title: 'India must invest in agri-tech and soil health to build climate-resilient food systems, say experts',
    category: 'ADVISORY',
    excerpt: ' India’s food security and climate resilience will continue to pose challenges unless government policies, farm economics, and ',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
    url: 'https://www.msn.com/en-in/news/india/india-must-invest-in-agri-tech-and-soil-health-to-build-climate-resilient-food-systems-say-experts/ar-AA1MnR7F?ocid=BingNewsSerp',
    time: '5 min',
    views: '750',
  },
  {
    title: "TN, 1st state in India to launch seed cooperatives",
    category: 'GOVERNMENT',
    excerpt: 'The government has launched a new scheme to support farmers with financial aid and modern farming techniques...',
    image: 'https://images.pexels.com/photos/8700/farmers-vegetables-market.jpg?auto=compress&cs=tinysrgb&w=300',
    url: 'https://timesofindia.indiatimes.com/city/hyderabad/t-to-lead-the-way-1st-state-in-india-to-launch-seed-cooperatives/articleshow/123837597.cms?utm_source=chatgpt.com',
    time: '6 min',
    views: '980',
  },
  {
    title: 'HAU develops new heat-tolerant wheat',
    category: 'AGRI NEWS',
    excerpt: 'More Indian farmers are switching to scientific and organic methods, improving soil health and fetching premium prices...',
    image: 'https://images.pexels.com/photos/3951621/pexels-photo-3951621.jpeg?auto=compress&cs=tinysrgb&w=300',
    url: 'https://timesofindia.indiatimes.com/city/chandigarh/hau-develops-new-heat-tolerant-wheat/articleshow/123816141.cms?utm_source=chatgpt.com',
    time: '4 min',
    views: '820',
  },
  {
    title: 'Farmers adopt drone technology for crop monitoring',
    category: 'TECHNOLOGY',
    excerpt: 'Drone technology is helping farmers monitor crop health and optimize irrigation in real time...',
    image: 'https://images.pexels.com/photos/7142582/pexels-photo-7142582.jpeg?auto=compress&cs=tinysrgb&w=300',
    url: 'https://www.moneycontrol.com/news/business/farmers-adopt-drone-technology-for-crop-monitoring-1034561.html',
    time: '5 min',
    views: '650',
  },
  {
    title: "‘Don’t sacrifice farmers to protect interests of industries’: Farmer leader",
    category: 'POLITICS',
    excerpt: "Farmer leader and founding member of Shetkari Sanghatana Vijay Jawandhia said that the US tariffs...",
    image: 'https://images.pexels.com/photos/209289/pexels-photo-209289.jpeg?auto=compress&cs=tinysrgb&w=300',
    url: 'https://indianexpress.com/article/cities/mumbai/dont-sacrifice-farmers-to-protect-interests-of-industries-farmer-leader-10249880/?utm_source=chatgpt.com',
    time: '3 min',
    views: '770',
  },
];

export default function BlogScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Farming Insights</Text>
          <Text style={styles.subtitle}>Latest news, tips & market updates</Text>
        </View>

        {/* Featured Article */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Article</Text>
          <View style={styles.featuredCard}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=400' }} 
              style={styles.featuredImage}
            />
            <View style={styles.featuredContent}>
              <Text style={styles.featuredCategory}>MARKET ANALYSIS</Text>
              <Text style={styles.featuredTitle}>
                Tomato Prices Surge 25% - Best Time to Harvest
              </Text>
              <Text style={styles.featuredExcerpt}>
                Market demand for tomatoes has increased significantly this month. Here's what farmers need to know about timing their harvest for maximum profit...
              </Text>
              <View style={styles.articleMeta}>
                <View style={styles.metaItem}>
                  <Clock size={14} color="#6a994e" />
                  <Text style={styles.metaText}>5 min read</Text>
                </View>
                <View style={styles.metaItem}>
                  <Eye size={14} color="#6a994e" />
                  <Text style={styles.metaText}>2.3k views</Text>
                </View>
              </View>
            </View>
          </View>
        </View>


        {/* Recent Articles */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Articles</Text>

          {articles.map((article, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.articleCard}
              onPress={() => Linking.openURL(article.url)}
            >
              <Image source={{ uri: article.image }} style={styles.articleImage} />
              <View style={styles.articleContent}>
                <Text style={styles.articleCategory}>{article.category}</Text>
                <Text style={styles.articleTitle}>{article.title}</Text>
                <Text style={styles.articleExcerpt}>{article.excerpt}</Text>

                <View style={styles.articleFooter}>
                  <View style={styles.articleMeta}>
                    <View style={styles.metaItem}>
                      <Clock size={12} color="#6a994e" />
                      <Text style={styles.smallMetaText}>{article.time}</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Eye size={12} color="#6a994e" />
                      <Text style={styles.smallMetaText}>{article.views}</Text>
                    </View>
                  </View>

                  <View style={styles.articleActions}>
                    <TouchableOpacity style={styles.actionButton}>
                      <ThumbsUp size={16} color="#6a994e" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                      <Bookmark size={16} color="#6a994e" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                      <Share2 size={16} color="#6a994e" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// (Keep your existing styles as they are)

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
  featuredSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#386641',
    marginBottom: 16,
  },
  featuredCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 20,
  },
  featuredCategory: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#bc4749',
    marginBottom: 8,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#386641',
    marginBottom: 12,
    lineHeight: 26,
  },
  featuredExcerpt: {
    fontSize: 14,
    color: '#6a994e',
    lineHeight: 20,
    marginBottom: 16,
  },
  categoriesSection: {
    paddingLeft: 20,
    marginBottom: 24,
  },
  categories: {
    flexDirection: 'row',
    gap: 12,
    paddingRight: 20,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#a7c957',
  },
  activeCategoryChip: {
    backgroundColor: '#386641',
    borderColor: '#386641',
  },
  categoryText: {
    fontSize: 14,
    color: '#386641',
    fontWeight: '500',
  },
  activeCategoryText: {
    color: 'white',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  articleCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  articleImage: {
    width: 100,
    height: 100,
  },
  articleContent: {
    flex: 1,
    padding: 16,
  },
  articleCategory: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#bc4749',
    marginBottom: 6,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#386641',
    marginBottom: 8,
    lineHeight: 20,
  },
  articleExcerpt: {
    fontSize: 12,
    color: '#6a994e',
    lineHeight: 16,
    marginBottom: 12,
  },
  articleFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articleMeta: {
    flexDirection: 'row',
    gap: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6a994e',
  },
  smallMetaText: {
    fontSize: 11,
    color: '#6a994e',
  },
  articleActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    padding: 4,
  },
});