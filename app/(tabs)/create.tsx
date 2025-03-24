import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CreateEventScreen() {
  const [category, setCategory] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create New Event</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Event Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter event title"
          placeholderTextColor="#666"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Category</Text>
        <View style={styles.categoryButtons}>
          {['Party', 'Sports', 'Academic', 'Arts', 'Music', 'Gaming'].map(
            (cat) => (
              <Pressable
                key={cat}
                style={[
                  styles.categoryButton,
                  category === cat && styles.categoryButtonActive,
                ]}
                onPress={() => setCategory(cat)}>
                <Text
                  style={[
                    styles.categoryButtonText,
                    category === cat && styles.categoryButtonTextActive,
                  ]}>
                  {cat}
                </Text>
              </Pressable>
            )
          )}
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Date & Time</Text>
        <Pressable style={styles.input}>
          <Ionicons name="calendar" size={20} color="#666" />
          <Text style={styles.inputText}>Select date and time</Text>
        </Pressable>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Location</Text>
        <Pressable style={styles.input}>
          <Ionicons name="location" size={20} color="#666" />
          <Text style={styles.inputText}>Choose location</Text>
        </Pressable>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe your event..."
          placeholderTextColor="#666"
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Cover Image</Text>
        <Pressable style={styles.imageUpload}>
          <Ionicons name="image" size={32} color="#666" />
          <Text style={styles.imageUploadText}>Upload cover image</Text>
        </Pressable>
      </View>

      <Pressable style={styles.createButton}>
        <Text style={styles.createButtonText}>Create Event</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    color: '#fff',
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  inputText: {
    color: '#666',
    fontSize: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  categoryButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#2a2a2a',
  },
  categoryButtonActive: {
    backgroundColor: '#7C4DFF',
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  categoryButtonTextActive: {
    fontWeight: 'bold',
  },
  imageUpload: {
    height: 200,
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUploadText: {
    color: '#666',
    fontSize: 16,
    marginTop: 8,
  },
  createButton: {
    backgroundColor: '#7C4DFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 40,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});