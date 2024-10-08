import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Platform, StyleSheet, Text, View, Image, StatusBar } from 'react-native'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ececec" barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bem vindo novamente, Usuário</Text>
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