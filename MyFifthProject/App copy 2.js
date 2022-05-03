import React from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.yellow}>Just Yellow Text!</Text>
      <Text style={styles.largeGreen}> This is Big green </Text>
      <Text style={[styles.yellow, styles.largeGreen]}> This is Big Yellow and then green </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,

  },
  largeGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },
  yellow: {
    color: 'yellow',
    fontSize: 10,
    backgroundColor: 'black'
  }
});
