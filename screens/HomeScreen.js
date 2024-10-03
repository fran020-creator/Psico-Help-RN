import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const HomeScreen = () => {
  return (
    <SafeAreaView>


     <ScrollView>
     <View>
        <Text style={styles.title}>
          Bem vindo novamente, Usuário
        </Text>
      </View>
     





        
    </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  title:{
    fontWeight:"bold",
    fontSize:20,
  },
  SafeAreaView:{
    paddingTop:Platform.OS ==="android"?40:0,flex:1,backgroundColor:"white"
  }

})