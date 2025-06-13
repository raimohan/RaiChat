import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Edit, ShieldAlert, Trash2 } from 'lucide-react-native';
import ConfirmationModal from '../../components/ConfirmationModal';

export default function ProfileScreen() {
  const [modal, setModal] = useState({ isVisible: false, type: null });

  return (
    <View style={styles.container}>
      <ConfirmationModal 
        isVisible={modal.isVisible}
        title={modal.type === 'deactivate' ? "Deactivate Account?" : "Permanently Delete?"}
        message={modal.type === 'deactivate' ? "You can reactivate your account anytime." : "This action cannot be undone."}
        confirmText={modal.type === 'deactivate' ? "Deactivate" : "Delete Account"}
        onConfirm={() => setModal({isVisible: false, type: null})}
        onCancel={() => setModal({isVisible: false, type: null})}
        isDestructive={modal.type === 'delete'}
      />
      <View style={styles.header}><Text style={styles.headerTitle}>Profile</Text></View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileHeader}>
          <Image source={{ uri: 'https://placehold.co/120x120/E5E5EA/000?text=R' }} style={styles.avatar} />
          <TouchableOpacity style={styles.editButton}><Edit color="#fff" size={18} /></TouchableOpacity>
        </View>
        <Text style={styles.name}>Rai</Text>
        <Text style={styles.phone}>+1 234 567 8900</Text>
        
        <View style={styles.aboutBox}>
          <Text style={styles.aboutTitle}>ABOUT</Text>
          <Text style={styles.aboutText}>In the pursuit of tranquility. ✨</Text>
        </View>

        <TouchableOpacity onPress={() => setModal({isVisible: true, type: 'deactivate'})} style={styles.actionButton}>
          <ShieldAlert color="#FF9500" size={22} />
          <Text style={[styles.actionText, {color: '#FF9500'}]}>Deactivate Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModal({isVisible: true, type: 'delete'})} style={styles.actionButton}>
          <Trash2 color="#FF3B30" size={22} />
          <Text style={[styles.actionText, {color: '#FF3B30'}]}>Permanently Delete Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
  header: { padding: 20, paddingTop: 50, backgroundColor: '#fff' },
  headerTitle: { fontSize: 32, fontFamily: 'DM-Sans-Bold' },
  content: { alignItems: 'center', padding: 20 },
  profileHeader: { marginTop: 20, marginBottom: 15 },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  editButton: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#007AFF', padding: 8, borderRadius: 16, borderWidth: 2, borderColor: '#fff' },
  name: { fontSize: 24, fontFamily: 'DM-Sans-Bold' },
  phone: { fontSize: 16, fontFamily: 'DM-Sans-Regular', color: '#636366', marginTop: 5 },
  aboutBox: { backgroundColor: '#fff', borderRadius: 12, padding: 15, width: '100%', marginVertical: 25 },
  aboutTitle: { fontFamily: 'DM-Sans-Medium', color: '#8E8E93', marginBottom: 5 },
  aboutText: { fontFamily: 'DM-Sans-Regular', color: '#1c1c1e', fontSize: 16 },
  actionButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 12, padding: 15, width: '100%', marginTop: 10 },
  actionText: { fontFamily: 'DM-Sans-Medium', fontSize: 16, marginLeft: 15 },
});
