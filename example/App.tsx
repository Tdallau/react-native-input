import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-input';

export default function App() {
  return (
    <View style={styles.container}>
      <Input
        type="DropDown"
        baseValue={[{value: 'string', label: 'dit is een test'}, {value: 'string2', label: 'dit is een test'}]}
        getValue={(value) => alert(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
