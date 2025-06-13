import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { ChevronRight, User, Bell, Lock } from 'lucide-react-native';

const settingsItems = [
    { id: 'account', icon: User, text: 'Account', color: '#007AFF' },
    { id: 'notifications', icon: Bell, text: 'Notifications', color: '#FF3B30' },
    { id: 'privacy', icon: Lock, text: 'Privacy & Security', color: '#FF9500' },
];

export default function SettingsScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('SettingDetail', { title: item.text })}>
            <View style={[styles.iconContainer, {backgroundColor: item.color+'20'}]}>
                <item.icon color={item.color} size={20} />
            </View>
            <Text style={styles.itemText}>{item.text}</Text>
            <ChevronRight color="#C7C7CC" size={20} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}><Text style={styles.headerTitle}>Settings</Text></View>
            <FlatList data={settingsItems} keyExtractor={item => item.id} renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F2F2F7' },
    header: { padding: 20, paddingTop: 50, backgroundColor: '#fff' },
    headerTitle: { fontSize: 32, fontFamily: 'DM-Sans-Bold' },
    item: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#E5E5EA' },
    iconContainer: { width: 32, height: 32, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
    itemText: { flex: 1, fontSize: 17, fontFamily: 'DM-Sans-Regular' },
});
