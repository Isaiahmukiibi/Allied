import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const CATEGORIES = [
  { id: '1', name: 'Parties', icon: 'beer' },
  { id: '2', name: 'Sports', icon: 'basketball' },
  { id: '3', name: 'Academic', icon: 'book' },
  { id: '4', name: 'Arts', icon: 'color-palette' },
  { id: '5', name: 'Music', icon: 'musical-notes' },
  { id: '6', name: 'Gaming', icon: 'game-controller' },
];

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search events, people, or places..."
          placeholderTextColor="#666"
        />
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}>
        {CATEGORIES.map((category) => (
          <Pressable key={category.id} style={styles.categoryButton}>
            <View style={styles.categoryIcon}>
              <Ionicons name={category.icon as keyof typeof Ionicons.glyphMap} size={24} color="#7C4DFF" />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Trending Near You</Text>
      <View style={styles.trendingContainer}>
        <View style={styles.trendingItem}>
          <Ionicons name="trending-up" size={20} color="#7C4DFF" />
          <Text style={styles.trendingText}>CSEA Chapter Launching</Text>
          <Text style={styles.trendingCount}>2.5k interested</Text>
        </View>
        <View style={styles.trendingItem}>
          <Ionicons name="trending-up" size={20} color="#7C4DFF" />
          <Text style={styles.trendingText}>Azania</Text>
          <Text style={styles.trendingCount}>1.8k interested</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  categoriesContainer: {
    paddingBottom: 16,
    gap: 12,
  },
  categoryButton: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    color: '#fff',
    fontSize: 14,
  },
  trendingContainer: {
    gap: 12,
  },
  trendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  trendingText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  trendingCount: {
    color: '#666',
    fontSize: 14,
  },
});