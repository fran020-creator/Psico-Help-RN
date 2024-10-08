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
      <View style={styles.header}>
        <Image
          source={require('../assets/image/info/Background-profile.png')} // Substituir com o link da imagem do cérebro
          style={styles.headerImage}
        />
      </View>

      {/* Cartão com informações do perfil */}
      <View style={styles.profileContainer}>
        {/* Imagem do avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/image/info/Profile-pic.png')} // Substituir com o link do avatar
            style={styles.avatar}
          />
        </View>

        {/* Informações do profissional */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Psicóloga</Text>
          <Text style={styles.professionalName}>Mônica Soares Albuquerque</Text>
          <Text style={styles.specialization}>Graduada em Psicologia, especializada em fenomenologia existencial</Text>
        </View>
      </View>

      {/* Caixa de descrição */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Descrição</Text>
        <Text style={styles.descriptionText}>Insira uma breve descrição aqui...</Text>
      </View>

      {/* Seção de contatos */}
      <View style={styles.contactsContainer}>
        <Text style={styles.contactsTitle}>Contatos</Text>
        <View style={styles.iconsContainer}>
          {/* Imagem do Instagram */}
          <Image
            source={require('../assets/image/info/Insta-Icon.png')}  // Substitua com o caminho correto
            style={styles.iconImage}
          />

          {/* Imagem do WhatsApp */}
          <Image
            source={require('../assets/image/info/Whats-Icon.png')}  // Substitua com o caminho correto
            style={styles.iconImage}
          />

          {/* Imagem do LinkedIn */}
          <Image
            source={require('../assets/image/info/Linkedin-Icon.png')}  // Substitua com o caminho correto
            style={styles.iconImage}
          />
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
    marginVertical: '3%',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
  }, 
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -50,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  professionalName: {
    fontSize: 16,
    color: '#555',
  },
  specialization: {
    fontSize: 14,
    color: '#777',
  },
  descriptionContainer: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
  },
  contactsContainer: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
  },
  contactsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  icon: {
    marginHorizontal: 10,
  },
});