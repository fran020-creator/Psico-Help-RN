import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';
export default function InfoScreen() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#e3e3e3" barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Info</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Config')}>
          <Image source={require('../assets/image/calendar/config-Icon.png')} style={styles.configIcon} />
        </TouchableOpacity>
      </View>








    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginVertical: '3%',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
  }
})