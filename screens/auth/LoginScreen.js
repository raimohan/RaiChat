import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Mail, KeyRound } from 'lucide-react-native';
import StyledTextInput from '../../components/StyledTextInput';
import SocialIcons from '../../components/SocialIcons';

export default function LoginScreen({ navigation }) {
  // Add Firebase logic here
  const handleLogin = () => navigation.replace('Main');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Log in to continue your journey</Text>
      
      <StyledTextInput icon={<Mail color="#8E8E93" size={20} />} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
      <StyledTextInput icon={<KeyRound color="#8E8E93" size={20} />} placeholder="Password" secureTextEntry />
      
      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>
      <SocialIcons onGooglePress={handleLogin} onApplePress={handleLogin} />

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>New here? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 25, backgroundColor: '#fff' },
  title: { fontSize: 34, fontFamily: 'DM-Sans-Bold', color: '#1c1c1e', marginBottom: 10 },
  subtitle: { fontSize: 16, fontFamily: 'DM-Sans-Regular', color: '#636366', marginBottom: 30 },
  forgotContainer: { width: '100%', alignItems: 'flex-end', marginVertical: 10 },
  forgotText: { color: '#007AFF', fontFamily: 'DM-Sans-Medium' },
  loginButton: { backgroundColor: '#007AFF', padding: 15, borderRadius: 12, width: '100%', alignItems: 'center', marginVertical: 10 },
  loginButtonText: { color: '#fff', fontSize: 18, fontFamily: 'DM-Sans-Bold' },
  orText: { color: '#AEAEB2', fontFamily: 'DM-Sans-Medium', marginVertical: 20 },
  signupContainer: { flexDirection: 'row', marginTop: 40 },
  signupText: { color: '#636366', fontFamily: 'DM-Sans-Regular' },
  signupLink: { color: '#007AFF', fontFamily: 'DM-Sans-Bold' },
});
