import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatWindowScreen({ route, navigation }) {
  // const { chatId } = route.params;
  // Set chat partner's name in header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chat User', // Replace with actual user name
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Chat Window Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
