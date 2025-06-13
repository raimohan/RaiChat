import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

export default function ConfirmationModal({ isVisible, title, message, confirmText, onConfirm, onCancel, isDestructive }) {
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              onPress={onConfirm} 
              style={[styles.button, isDestructive ? styles.destructiveButton : styles.confirmButton]}
            >
              <Text style={styles.buttonText}>{confirmText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel} style={[styles.button, styles.cancelButton]}>
              <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: { fontSize: 20, fontFamily: 'DM-Sans-Bold', marginBottom: 10, color: '#1c1c1e' },
  message: { fontSize: 16, fontFamily: 'DM-Sans-Regular', textAlign: 'center', marginBottom: 20, color: '#636366' },
  buttonContainer: { width: '100%' },
  button: { width: '100%', padding: 12, borderRadius: 12, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: 'white', fontSize: 16, fontFamily: 'DM-Sans-Bold' },
  confirmButton: { backgroundColor: '#007AFF' },
  destructiveButton: { backgroundColor: '#FF3B30' },
  cancelButton: { backgroundColor: '#E5E5EA' },
  cancelButtonText: { color: '#007AFF', fontFamily: 'DM-Sans-Medium' },
});
