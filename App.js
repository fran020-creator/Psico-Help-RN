import React from 'react'
import { StyleSheet, StatusBar } from 'react-native';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#e3e3e3" barStyle="dark-content" />
        <StackNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
});
