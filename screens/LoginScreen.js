import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, Pressable, Alert, Platform, Switch, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';




export default function LoginScreen() {

  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);



  const handleLogin = () => {
    const user = {
      email: email,
      password: password
    }
    axios.post("http://10.0.2.2:8000/login", user).then((response) => {
      console.log(response);
      const token = response.data.token;
      const userEmail = response.data.email;
      AsyncStorage.setItem("authToken", token);
      AsyncStorage.setItem("userEmail", userEmail);
      navigation.replace("Main")
    }).catch((error) => {
      Alert.alert("login error", "invalid email");
      console.log(error);
    })

  };

  return (


    <SafeAreaView style={styles.containerSafeView}>
      <StatusBar backgroundColor="#ececec" barStyle="dark-content" />

      <View style={styles.imageView}>
        <Image style={styles.logoImage}
          source={require('../assets/image/register/logo-Login.png')} />
      </View>

      <Text style={styles.header}>Faça login</Text>

      <KeyboardAvoidingView>
        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/user-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder='Email' placeholderTextColor={'black'} style={styles.inputBox} />
        </View>

        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/lock-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder='Senha' placeholderTextColor={'black'} style={styles.inputBox} />
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
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: '0.5%',
    borderRadius: 12,
    marginTop: '7%',
    marginHorizontal: '18%',
    borderColor: '#d9d9d9',
    borderWidth: 2,
    elevation: 2, //sombra para android
    shadowColor: '#000', // Sombra para iOS
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginLeft: '4%',
    color: 'black',
  },
  inputBox: {
    marginVertical: '4.5%',
    fontSize: 18,
    opacity: 0.7,
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
    transform: [{ scaleX: Platform.OS === 'ios' ? 1.1 : 1.5 },{ scaleY: Platform.OS === 'ios' ? 1.1 : 1.5 }]
  },
  buttonLog: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
  },
  nextButton: {
    marginTop: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: '5%',
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