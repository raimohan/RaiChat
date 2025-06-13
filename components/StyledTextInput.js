import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function StyledTextInput({ icon, ...props }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <TextInput
        style={styles.input}
        placeholderTextColor="#AEAEB2"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginVertical: 8,
    width: '100%',
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: '#000',
    fontFamily: 'DM-Sans-Regular',
  },
});
