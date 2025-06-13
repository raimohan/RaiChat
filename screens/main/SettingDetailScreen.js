import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingDetailScreen({ route, navigation }) {
    const { title } = route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({ title: title });
    }, [navigation, title]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details for {title}</Text>
        </View>
    );
}
const detailStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { fontSize: 18, fontFamily: 'DM-Sans-Regular', color: '#636366' },
});
