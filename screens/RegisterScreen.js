import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, Pressable, Alert, StatusBar } from 'react-native';
import axios from 'axios';

export default function RegisterScreen() {

  const [name, SetName] = useState("");
  // const [age, SetAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      // age: age,
      email: email,
      password: password,
      // phone: phone,

    };

    //send a post request to the backend api
    axios.post("http://10.0.2.2:8000/register", user).then((response) => {
      console.log(response);
      Alert.alert(
        "registrado com sucesso",
        "você se registrou"
      );
      SetName("");
      // SetAge("");
      setEmail("");
      setPassword("");
      // setPhone("");
    }).catch((error) => {
      Alert.alert("ocorreu um erro ao se registrar", "um erro ocorreu");
      console.log("registro falhou", error);
    })
  }

  return (
    <SafeAreaView style={styles.containerSafeView}>
      <StatusBar backgroundColor="#ececec" barStyle="dark-content" />

      <View style={styles.imageView}>
        <Image style={styles.logoImage} source={require('../assets/image/register/logo-Login.png')} />
      </View>

      <Text style={styles.header}> Cadastre-se </Text>

      <KeyboardAvoidingView>
        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/user-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput value={name} onChangeText={(text) => SetName(text)} placeholder='Nome' placeholderTextColor={'black'} style={styles.inputBox} />
        </View>

        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/age-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput value={name} onChangeText={(text) => SetName(text)} placeholder='Idade' placeholderTextColor={'black'} style={styles.inputBox} />
        </View>

        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/email-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder='Email' placeholderTextColor={'black'} style={styles.inputBox} />
        </View>

        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/lock-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder='Senha' placeholderTextColor={'black'} style={styles.inputBox} />
        </View>


        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/phone-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput value={name} onChangeText={(text) => SetName(text)} placeholder='Celular' placeholderTextColor={'black'} style={styles.inputBox} />
        </View>

        <View style={styles.accountView}>
          <Pressable style={styles.accountButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}> Possui uma conta? </Text>
          </Pressable>
        </View>

        {/* // Button Setinha - Cadastre-se */}
        <View style={styles.nextButton}>
          <Pressable onPress={() => { handleRegister(); navigation.goBack(); }} style={styles.nextPress} >
            <Image style={styles.nextButtonImage} source={require('../assets/image/register/arrow-Icon.png')} resizeMode='contain' />
          </Pressable>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}



const styles = StyleSheet.create({
  containerSafeView: {
    flex: 1,
    backgroundColor: "#ececec",
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
    marginTop: '6%',
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
  accountView: { 
    marginVertical: '4%',
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  accountButton: {
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    color: "#9896F1",
    fontWeight: '400',
  },
  nextButton: {
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

});