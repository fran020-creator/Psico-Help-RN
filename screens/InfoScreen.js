import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';

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

      <View style={styles.banner}>
        <Image source={require('../assets/image/info/background-Banner.png')} style={styles.bannerImage} />
        <Image source={require('../assets/image/info/profile-Icon.png')} style={styles.avatar} />
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Psicóloga</Text>
        <Text style={styles.infoName}>Mônica Soares Albuquerque</Text>
        <Text style={styles.specialization}>Graduada em Psicologia, especializada em fenomenologia existencial </Text>
      </View>

      <View style={styles.descriptionCard}>
        <Text style={styles.descriptionTitle}>Transforme sua vida com a Psicologia!</Text>
        <Text style={styles.descriptionText}>Você já parou para pensar no real sentido da sua vida? Como psicóloga especializada em Fenomenologia Existencial, ajudo você a explorar seus pensamentos e sentimentos mais profundos, possibilitando uma jornada única de autoconhecimento e transformação. Através de um processo terapêutico humanizado, trabalhamos juntos para enfrentar ansiedades, desafios emocionais e existenciais, promovendo clareza, autenticidade e uma nova forma de se relacionar com o mundo.</Text>
      </View>

      <View style={styles.contactsCard}>
        <Text style={styles.contactsTitle}>Contatos</Text>

        <View style={styles.contactsIcons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/monicasoalb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==')}>
            <Image source={require('../assets/image/info/Insta-Icon.png')} style={styles.iconImage} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/5521974744286')}>
            <Image source={require('../assets/image/info/Whats-Icon.png')} style={styles.iconImage} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/monica-soares-de-albuquerque-929a8220b/')}>
            <Image source={require('../assets/image/info/Linkedin-Icon.png')} style={styles.iconImage} />
          </TouchableOpacity>
        </View>
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
    marginVertical: '1%',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
  },
  banner: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    position: 'relative'
  },
  bannerImage: {
    width: '100%',
    height: 169,
    resizeMode: 'cover',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    top: '70%',
    left: '40%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  infoCard: {
    marginTop: '13%',
    marginHorizontal: '3%',
    backgroundColor: '#fff',
    padding: '4%',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    gap: 2,
  },

  infoTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
  },
  infoName: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  specialization: {
    fontSize: 14,
    color: 'black',
  },
  descriptionCard: {
    backgroundColor: '#fff',
    marginTop: '3%',
    marginHorizontal: '10%',
    padding: '3%',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    gap: 5,
  },
  descriptionTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    color: 'black',
  },
  contactsCard: {
    backgroundColor: '#fff',
    marginTop: '5%',
    marginHorizontal: '3%',
    padding: '3%',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    gap: 15,
  },
  contactsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactsIcons: {
    flexDirection: 'row',
    paddingHorizontal: '4%',
    paddingVertical: '1%',
    gap: 30
  },
});