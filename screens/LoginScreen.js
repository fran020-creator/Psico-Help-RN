import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, ActivityIndicator, TextInput, Pressable, Alert, Platform, Switch, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';




export default function LoginScreen() {

  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    }
    axios.post("http://192.168.0.223:8000/login", user).then((response) => {
      console.log(response);
      const token = response.data.token;
      const userEmail = response.data.email;
      const userName = response.data.name;
      const userIdade = response.data.idade;
      const userCelular = response.data.celular;

      AsyncStorage.setItem("authToken", token);
      AsyncStorage.setItem("userEmail", userEmail);
      AsyncStorage.setItem("userName", userName);
      AsyncStorage.setItem('userIdade', userIdade);
      AsyncStorage.setItem('userCelular', userCelular);
      navigation.replace("Main");
    }).catch((error) => {
      Alert.alert("login error", "invalid email");
      console.log(error);
    })
  };

  // Função para alternar o estado do Switch
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null: carregando, false: não logado, true: logado
  const Stack = createNativeStackNavigator();

  const checkIfLoggedIn = async () => {
    try {
      const token = await AsyncStorage.getItem('@auth_token');
      if (token) {
        setIsLoggedIn(true); // Se o token existe, usuário está logado
      } else {
        setIsLoggedIn(false); // Se o token não existe, não está logado
      }
    } catch (error) {
      console.log('Erro ao verificar o login:', error);
    }
  };

  useEffect (() => {
    checkIfLoggedIn(); // Verifica o login quando o app inicia
  }, []);

  // Exibe um indicador de carregamento enquanto verifica o login
  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (

    <SafeAreaView style={styles.containerSafeView}>
      <StatusBar backgroundColor="#e3e3e3" barStyle="dark-content" />

      <View style={styles.imageView}>
        <Image style={styles.logoImage}
          source={require('../assets/image/register/logo-Login.png')} />
      </View>

      <Text style={styles.header}>Faça login</Text>

      <KeyboardAvoidingView>
        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/user-Icon-Full.png')} style={styles.inputIcon} />
          
          <TextInput style={styles.inputBox}
          value={email} 
          onChangeText={(text) => setEmail(text)} 
          placeholder='Email' 
          placeholderTextColor={'black'} 
          keyboardType="email-address"
          maxLength={40}
          autoCapitalize="none"
          scrollEnabled={true}
          multiline={false}
          />
        </View>

        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/lock-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput style={styles.inputBox} 
          value={password} 
          onChangeText={(text) => setPassword(text)} 
          secureTextEntry={true} 
          placeholder='Senha' 
          placeholderTextColor={'black'} 
          maxLength={20}
          scrollEnabled={true}
          multiline={false}
          />
        </View>

        <View style={styles.containerButtons}>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.buttonRegister}>
              Cadastre-se
            </Text>
          </Pressable>
          <Pressable>
            <Text style={styles.buttonForget}> Esqueceu sua senha </Text>
          </Pressable>
        </View>

        <View style={styles.containerLog}>
          <Text style={styles.buttonLog}>Mantenha-me Logado</Text>
        </View>
        <View style={styles.containerSwitch}>
          <Switch
            trackColor={{ false: '#767577', true: '#4cd137' }}
            thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            onPress={() => {checkIfLoggedIn()}}
          />
        </View>

        <View style={styles.nextButton}>
          <Pressable onPress={() => { handleLogin() }} style={styles.nextPress} >
            <Image style={styles.nextButtonImage} source={require('../assets/image/register/arrow-Icon.png')} resizeMode='contain' />
          </Pressable>
        </View>

      </KeyboardAvoidingView>

    </SafeAreaView >
  );
};



const styles = StyleSheet.create({
  containerSafeView: {
    flex: 1,
    backgroundColor: "#e3e3e3",
  },
  imageView: {
    alignItems: 'center',
    marginVertical: '8%',
  },
  logoImage: {
    width: 262,
    height: 204,
  },
  header: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: "bold",
    marginBottom: '1%',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingVertical: '0.5%',
    borderRadius: 12,
    marginTop: '7%',
    marginHorizontal: '18%',
    borderColor: '#d9d9d9',
    borderWidth: 2,
    elevation: 2, //sombra para android
    shadowColor: '#000', // Sombra para iOS
    gap: 10,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginLeft: '4%',
    color: 'black',
  },
  inputBox: {
    flex: 1,
    fontSize: 18,
    marginVertical: '4.5%',
    opacity: 0.7,
    textAlign: 'left',
  },
  containerButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: '3%',
    marginHorizontal: '17%',
  },
  buttonRegister: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonForget: {
    fontSize: 16,
    color: "#9896F1",
    fontWeight: "500"
  },
  containerLog: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '15%',
  },
  containerSwitch: {
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'center',
    transform: [{ scaleX: Platform.OS === 'ios' ? 1.1 : 1.5 }, { scaleY: Platform.OS === 'ios' ? 1.1 : 1.5 }]
  },
  buttonLog: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
  },
  nextButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '25%',
    marginHorizontal: '6%',
  },
  nextPress: {
    width: 65,
    height: 65,
    borderRadius: 100,
  },
  nextButtonImage: {
    width: 65,
    height: 65,
  }
})