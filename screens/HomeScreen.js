import React, {useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {  StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'




const HomeScreen = () => {

  const [userName,setUserName]=useState('')

  useEffect(()=>{
    const fetchUserName=async()=>{
      const name = await AsyncStorage.getItem('userName');
      setUserName(name || 'Usuário')
    }
    fetchUserName();
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ececec" barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bem vindo novamente, {userName}</Text>
        <Image source={require('../assets/image/calendar/config-Icon.png')} style={styles.configIcon} />
      </View>



    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
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
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  }
})