import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Search, Plus } from 'lucide-react-native';

const chats = []; // Empty for now

export default function ChatListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>RaiChat</Text>
        <TouchableOpacity><Search color="#000" size={24} /></TouchableOpacity>
      </View>
      {chats.length === 0 ? (
        <View style={styles.emptyContainer}>
          <MessageSquare color="#AEAEB2" size={60} />
          <Text style={styles.emptyTitle}>No Chats Yet</Text>
          <Text style={styles.emptySubtitle}>Tap the plus button to start a new conversation.</Text>
        </View>
      ) : (
        <FlatList data={chats} keyExtractor={item => item.id} renderItem={({item}) => {/* Chat Item */}}/>
      )}
      <TouchableOpacity style={styles.fab} onPress={() => {}}>
        <Plus color="#fff" size={28} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, paddingTop: 50 },
  headerTitle: { fontSize: 32, fontFamily: 'DM-Sans-Bold' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  emptyTitle: { fontSize: 22, fontFamily: 'DM-Sans-Bold', marginTop: 20, color: '#1c1c1e' },
  emptySubtitle: { fontSize: 16, fontFamily: 'DM-Sans-Regular', color: '#636366', marginTop: 10, textAlign: 'center' },
  fab: { position: 'absolute', bottom: 30, right: 20, width: 60, height: 60, borderRadius: 30, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center', elevation: 5 },
});
