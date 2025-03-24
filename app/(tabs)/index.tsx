import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';

const EVENTS = [
  {
    id: '1',
    title: 'Campus Worship Night ',
    date: new Date('2024-02-15T20:00:00'),
    location: 'Nkoyoyo Building',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
    attendees: 156,
    category: 'Music',
  },
  {
    id: '2',
    title: 'Study Group Meetup',
    date: new Date('2024-02-16T14:00:00'),
    location: 'Noll Block - N 13',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    attendees: 12,
    category: 'Academic',
  },
  {
    id: '3',
    title: 'Basketball Tournament',
    date: new Date('2024-02-17T16:00:00'),
    location: 'Sports Complex',
    image: 'https://images.unsplash.com/photo-1544684107-1b84c05b0d89',
    attendees: 85,
    category: 'Sports',
  },
];
interface Event {
  id: string;
  title: string;
  date: Date;
  location: string;
  image: string;
  attendees: number;
  category: string;
}

function EventCard({ event }: { event: Event }) {
  return (
    <Pressable style={styles.card}>
      <Image
        source={{ uri: event.image }}
        style={styles.eventImage}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      />
      <View style={styles.eventInfo}>
        <View style={styles.categoryPill}>
          <Text style={styles.categoryText}>{event.category}</Text>
        </View>
        <Text style={styles.title}>{event.title}</Text>
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Ionicons name="time" size={16} color="#fff" />
            <Text style={styles.detailText}>
              {format(event.date, 'MMM d, h:mm a')}
            </Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="location" size={16} color="#fff" />
            <Text style={styles.detailText}>{event.location}</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="people" size={16} color="#fff" />
            <Text style={styles.detailText}>{event.attendees} attending</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={EVENTS}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  list: {
    padding: 16,
    gap: 16,
  },
  card: {
    height: 300,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#2a2a2a',
  },
  eventImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
  },
  eventInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  categoryPill: {
    backgroundColor: '#7C4DFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    gap: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    color: '#fff',
    fontSize: 14,
  },
});