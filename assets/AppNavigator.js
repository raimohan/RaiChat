import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../screens/auth/LoadingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import MainTabNavigator from './MainTabNavigator';
import ChatWindowScreen from '../screens/main/ChatWindowScreen';
import SettingDetailScreen from '../screens/main/SettingDetailScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' } }}>
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
      <Stack.Screen 
        name="ChatWindow" 
        component={ChatWindowScreen} 
        options={{ headerShown: true }}
      />
      <Stack.Screen 
        name="SettingDetail" 
        component={SettingDetailScreen} 
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
