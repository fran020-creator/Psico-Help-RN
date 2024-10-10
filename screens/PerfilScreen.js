import React,{useState,useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function RegisterScreen() {

  const [userName,setUserName]=useState('');
  const [userEmail,setUserEmail]=useState('');
  const [userIdade,setUserIdade]=useState('');
  const [userCelular,setUserCelular]=useState('');
  const navigation = useNavigation();

  useEffect(()=>{
    const fetchUserName=async()=>{
      const name = await AsyncStorage.getItem('userName');
      const email = await AsyncStorage.getItem('userEmail');
      const idade = await AsyncStorage.getItem('userIdade');
      const celular = await AsyncStorage.getItem('userCelular');
      setUserName(name || 'Usuário');
      setUserEmail(email ||'Email');
      setUserIdade(idade ||'Idade');
      setUserCelular(celular ||'Celular');
    }
    fetchUserName();
  },[])

  const handleLogout = async () => {
    try {

      await AsyncStorage.removeItem('authToken');
      navigation.replace('Login');
    } catch (error) {
      Alert.alert("Logout Error", "Ocorreu um erro ao tentar deslogar.");
      console.log(error);

    }
  }

  return (
    <SafeAreaView style={styles.containerScreen}>
      <StatusBar backgroundColor="#e3e3e3" barStyle="dark-content" />

      <View style={styles.iconsHeader}>
        <TouchableOpacity style={styles.buttonHead} onPress={() => navigation.goBack()}>
          <Image style={styles.imageHead} source={require('../assets/image/profile/back-Icon.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonHead} onPress={() => { }}>
          <Image style={styles.imageHead} source={require('../assets/image/profile/edit-Icon.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={require('../assets/image/profile/exemple-Photo.png')} />
        <Text style={styles.profileName}> {userName}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.imageInfo}>
          <Image style={styles.iconInfo} source={require('../assets/image/profile/email-Icon.png')} />
          <Image style={styles.iconInfo} source={require('../assets/image/profile/phone-Icon.png')} />
          <Image style={styles.iconInfo} source={require('../assets/image/profile/age-Icon.png')} />
        </View>

        <View style={styles.textInfo}>
          <Text style={styles.textData}>{userEmail}</Text>
          <Text style={styles.textData}>{userCelular}</Text>
          <Text style={styles.textData}>Idade {userIdade}</Text>
        </View>
      </View>

      <View style={styles.menuContainer}>

          <TouchableOpacity style={styles.buttonPress} onPress={() => { navigation.navigate('Consultas')}}>
            <View style={styles.menuButton}>
              <Image source={require('../assets/image/profile/agenda-Icon.png')} style={styles.iconButton} />
              <Text style={styles.buttonText}>Consultas agendadas</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonPress} onPress={() => { }}>
            <View style={styles.menuButton}>
              <Image source={require('../assets/image/profile/history-Icon.png')} style={styles.iconButton} />
              <Text style={styles.buttonText}>Histórico de consultas</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonPress} onPress={() => { }}>
            <View style={styles.menuButton}>
              <Image source={require('../assets/image/profile/fav-Icon.png')} style={styles.iconButton} />
              <Text style={styles.buttonText}>Seus favoritos</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonPress} onPress={() => { }}>
            <View style={styles.menuButton}>
              <Image source={require('../assets/image/profile/invite-Icon.png')} style={styles.iconButton} />
              <Text style={styles.buttonText}>Convide um amigo</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonPress} onPress={() => { }}>
            <View style={styles.menuButton}>
              <Image source={require('../assets/image/profile/payment-Icon.png')} style={styles.iconButton} />
              <Text style={styles.buttonText}>Formas de pagamento</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonPress} onPress={handleLogout}>
            <View style={styles.menuButton}>
              <Image source={require('../assets/image/profile/logout-Icon.png')} style={styles.iconButton} />
              <Text style={styles.logoutText}>Logout</Text>
            </View>
          </TouchableOpacity>
          
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  iconsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginVertical: '3%',
    backgroundColor: '#e3e3e3',
  },
  imageHead: { 
    backgroundColor: '#e3e3e3'
  },
  profileContainer: {
    paddingHorizontal: '12%',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',

  },
  profileImage: {
    width: 93,
    height: 93,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    paddingVertical: '7%',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: '10%',
    alignItems: 'center',
  },
  imageInfo: {
    flexDirection: 'colunm',
    gap: 12,

  },
  textInfo: {
    flexDirection: 'colunm',
    gap: 12,
    opacity: 0.5,
  },
  textData: {
    color: 'black',
    fontSize: 16
  },
  menuContainer: {
    backgroundColor: '#fff',
    margin: '5%',
    borderRadius: 20,
    elevation: 5, //sombra para android
    shadowColor: '#000', // Sombra para iOS
  },
  buttonPress: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignSelf: 'stretch'
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: '2%',
  },
  iconButton: {
    width: 28, // Largura da imagem
    height: 28, // Altura da imagem
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  logoutText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});