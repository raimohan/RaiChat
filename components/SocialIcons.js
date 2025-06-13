import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// In a real app, you'd use a library like react-native-svg for icons.
// For simplicity, we use text placeholders.
const GoogleIcon = () => <Text style={styles.iconText}>G</Text>;
const AppleIcon = () => <Text style={[styles.iconText, {color: '#fff'}]}></Text>;

export default function SocialIcons({ onGooglePress, onApplePress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onGooglePress} style={[styles.button, styles.googleButton]}>
        <GoogleIcon />
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onApplePress} style={[styles.button, styles.appleButton]}>
        <AppleIcon />
        <Text style={[styles.buttonText, {color: '#fff'}]}>Apple</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  googleButton: { backgroundColor: '#F2F2F7' },
  appleButton: { backgroundColor: '#000000' },
  buttonText: { fontSize: 16, fontFamily: 'DM-Sans-Medium', marginLeft: 10 },
  iconText: { fontSize: 20, fontWeight: 'bold' }
});
