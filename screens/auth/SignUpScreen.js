import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Mail, KeyRound, User } from 'lucide-react-native';
import StyledTextInput from '../../components/StyledTextInput';
import SocialIcons from '../../components/SocialIcons';

export default function SignUpScreen({ navigation }) {
  // Add Firebase logic here
  const handleSignUp = () => navigation.replace('Main');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Start your journey with RaiChat</Text>
      
      <StyledTextInput icon={<User color="#8E8E93" size={20} />} placeholder="Full Name" />
      <StyledTextInput icon={<Mail color="#8E8E93" size={20} />} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
      <StyledTextInput icon={<KeyRound color="#8E8E93" size={20} />} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR SIGN UP WITH</Text>
      <SocialIcons onGooglePress={handleSignUp} onApplePress={handleSignUp} />

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 25, backgroundColor: '#fff' },
    title: { fontSize: 34, fontFamily: 'DM-Sans-Bold', color: '#1c1c1e', marginBottom: 10 },
    subtitle: { fontSize: 16, fontFamily: 'DM-Sans-Regular', color: '#636366', marginBottom: 30 },
    signupButton: { backgroundColor: '#007AFF', padding: 15, borderRadius: 12, width: '100%', alignItems: 'center', marginVertical: 20 },
    signupButtonText: { color: '#fff', fontSize: 18, fontFamily: 'DM-Sans-Bold' },
    orText: { color: '#AEAEB2', fontFamily: 'DM-Sans-Medium', marginVertical: 20 },
    loginContainer: { flexDirection: 'row', marginTop: 40 },
    loginText: { color: '#636366', fontFamily: 'DM-Sans-Regular' },
    loginLink: { color: '#007AFF', fontFamily: 'DM-Sans-Bold' },
});
