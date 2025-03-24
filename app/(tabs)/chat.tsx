import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CHATS = [
  {
    id: '1',
    name: 'Semester Break Planning',
    lastMessage: 'Count me in for the beach party! 🏖️',
    time: '2m ago',
    unread: 3,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
    isGroup: true,
  },
  {
    id: '2',
    name: 'Wesonga Collins',
    lastMessage: 'See you at the library at 3?',
    time: '1h ago',
    unread: 0,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    isGroup: false,
  },
  {
    id: '3',
    name: 'Basketball Team',
    lastMessage: 'Practice moved to 5PM today',
    time: '2h ago',
    unread: 1,
    avatar: 'https://images.unsplash.com/photo-1544684107-1b84c05b0d89',
    isGroup: true,
  },
];

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
  isGroup: boolean;
}

function ChatItem({ chat }: { chat: Chat }) {
  return (
    <Pressable style={styles.chatItem}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: chat.avatar }} style={styles.avatar} />
        {chat.isGroup && (
          <View style={styles.groupIndicator}>
            <Ionicons name="people" size={12} color="#fff" />
          </View>
        )}
      </View>
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{chat.name}</Text>
          <Text style={styles.chatTime}>{chat.time}</Text>
        </View>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {chat.lastMessage}
          </Text>
          {chat.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadCount}>{chat.unread}</Text>
            </View>
          )}
      </View>
    </Pressable>
  );
}

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search conversations..."
          placeholderTextColor="#666"
        />
      </View>

      <FlatList
        data={CHATS}
        renderItem={({ item }) => <ChatItem chat={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />

      <Pressable style={styles.newChatButton}>
        <Ionicons name="create" size={24} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    margin: 16,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#fff',
  },
  chatList: {
    padding: 16,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  groupIndicator: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#7C4DFF',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatInfo: {
    flex: 1,
    marginLeft: 12,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatTime: {
    color: '#666',
    fontSize: 12,
  },
  chatFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    color: '#999',
    fontSize: 14,
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: '#7C4DFF',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  unreadCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  newChatButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#7C4DFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7C4DFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
});