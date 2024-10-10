import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Stories from '../Stories';

const HomeScreen = () => {

  const navigation = useNavigation();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      const name = await AsyncStorage.getItem('userName');
      setUserName(name || 'Usuário');
    }
    fetchUserName();
  }, [])

  return (
    <>
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#e3e3e3' barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bem vindo novamente, {userName}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Config')}>
          <Image source={require('../assets/image/calendar/config-Icon.png')} style={styles.configIcon} />
        </TouchableOpacity>
      </View>
      
      <Stories />

      
    </SafeAreaView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
    marginVertical: '3%',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },

})