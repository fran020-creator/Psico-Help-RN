import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, ActivityIndicator, TextInput, Pressable, Alert, Platform, Switch, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default function LoginScreen() {

  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkIfLoggedIn(); // Chame a função ao montar o componente
  }, []); // Array vazio para executar apenas uma vez

  const checkIfLoggedIn = async () => {
    try {
      const keepLoggedIn = await AsyncStorage.getItem("keepLoggedIn");
      const token = await AsyncStorage.getItem("authToken");

      // Logs para verificar os valores
      console.log("keepLoggedIn:", keepLoggedIn);
      console.log("authToken:", token);

      if (keepLoggedIn === "true" && token) {
        setIsLoggedIn(true); // Se o usuário optou por manter-se logado e o token existe
        navigation.replace("Main");
      } else {
        setIsLoggedIn(false); // Se a opção ou o token não existem, usuário não está logado
      }
    } catch (error) {
      console.log("Erro ao verificar o login:", error);
    }
  };

  const toggleSwitch = async () => {
    setIsEnabled(previousState => !previousState);
    const newValue = !isEnabled;

    try {
      await AsyncStorage.setItem("keepLoggedIn", newValue.toString());
      console.log("KeepLoggedIn salvo com sucesso", newValue); //log keeploggedin
    } catch (error) {
      console.log("Erro ao salvar KeepLoggedIn:", error);
    }
  };

  const handleLogin = async () => {
    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://192.168.0.223:8000/login", user);
      console.log(response);

      const token = response.data.token;
      const userEmail = response.data.email;
      const userName = response.data.name;
      const userIdade = response.data.idade;
      const userCelular = response.data.celular;

      // log para verificar estado do token
      AsyncStorage.setItem("authToken", token)
        .then(() => console.log("Token salvo com sucesso"))
        .catch((error) => console.log("Erro ao salvar o token:", error));

      await AsyncStorage.setItem("authToken", token);
      await AsyncStorage.setItem("userEmail", userEmail);
      await AsyncStorage.setItem("userName", userName);
      await AsyncStorage.setItem("userIdade", userIdade);
      await AsyncStorage.setItem("userCelular", userCelular);

      if (isEnabled) { // Se o Switch estiver ativo, salve a preferência de manter logado
        await AsyncStorage.setItem("keepLoggedIn", "true");
      } else {
        await AsyncStorage.removeItem("keepLoggedIn"); // Remova a preferência se o switch estiver desligado
      }

      navigation.navigate("Main");
    } catch (error) {
      Alert.alert("Erro de login", "Email ou senha inválidos");
      console.log(error);
    }
  };

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