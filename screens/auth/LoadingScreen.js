import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    // In a real app, you'd check auth state here
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>R</Text>
      <Text style={styles.title}>RaiChat</Text>
      <ActivityIndicator size="large" color="#007AFF" style={{marginTop: 20}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  logo: {
    fontSize: 80,
    fontFamily: 'DM-Sans-Bold',
    color: '#007AFF',
    width: 120,
    height: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 60,
    backgroundColor: '#E5E5EA',
    marginBottom: 10
  },
  title: { fontSize: 32, fontFamily: 'DM-Sans-Bold', color: '#1c1c1e' },
});
