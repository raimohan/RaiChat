import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MessageSquare, User, Settings } from 'lucide-react-native';

import ChatListScreen from '../screens/main/ChatListScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import SettingsScreen from '../screens/main/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let IconComponent;
          if (route.name === 'Chats') IconComponent = MessageSquare;
          else if (route.name === 'Profile') IconComponent = User;
          else if (route.name === 'Settings') IconComponent = Settings;
          return <IconComponent color={color} size={size} strokeWidth={focused ? 2.5 : 2} />;
        },
        tabBarActiveTintColor: '#007AFF', // Blue color
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Chats" component={ChatListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
