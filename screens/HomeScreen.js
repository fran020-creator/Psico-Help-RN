import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView, Pressable, Linking, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Stories from '../storiestemp'
import { statusData } from '../helpers/defaultData'

const HomeScreen = () => {

  const navigation = useNavigation();
  const [userName, setUserName] = useState('');

  const [pressedButton, setPressedButton] = useState(null); // Armazena o índice do botão pressionado
  const [opacityValue] = useState(new Animated.Value(1)); // Para animação de opacidade dos outros botões
  const [scaleValue] = useState(new Animated.Value(1)); // Para animar o botão pressionado
  

  useEffect(() => {
    const fetchUserName = async () => {
      const name = await AsyncStorage.getItem('userName');
      setUserName(name || 'Usuário');
    }
    fetchUserName();
  }, [])


  const handlePress = (buttonIndex) => {
    setPressedButton(buttonIndex);

    // Animação de sumir os outros botões
    Animated.timing(opacityValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Animação de crescimento do botão pressionado
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.5, // O botão cresce para 1.5x o tamanho original
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(scaleValue, {
        toValue: 1, // Retorna ao tamanho original com efeito de bounce
        friction: 4,
        tension: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='#e3e3e3' barStyle="dark-content" />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Bem vindo novamente, {userName}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Config')}>
            <Image source={require('../assets/image/calendar/config-Icon.png')} style={styles.configIcon} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.timeScrollContainer} horizontal={true}>
          <View style={styles.storiesRow}>
            {statusData.map((stories, index) => <Stories key={index} stories={stories} />)}
          </View>
        </ScrollView>

        <View style={styles.feelingContainer}>
          <Text style={styles.feelingTitle}> Como você está se sentindo hoje? </Text>
        </View>

        <View style={styles.buttonsContainer}>
          {['Mal', '+ ou -', 'Bem', 'Ótimo'].map((feeling, index) => (
            <Animated.View
              key={index}
              style={[
                styles.buttonPress,
                pressedButton !== null && pressedButton !== index
                  ? { opacity: opacityValue } // Esconde os outros botões
                  : {},
                pressedButton === index && { transform: [{ scale: scaleValue }] }, // Animação do botão pressionado
              ]}
            >
              {pressedButton === null || pressedButton === index ? (
                <Pressable onPress={() => handlePress(index)}>
                  <View
                    style={[
                      styles.buttonBack,
                      {
                        backgroundColor: index === 0 ? '#EA8A8A' : index === 1 ? '#F4BE56' : index === 2 ? '#BCEC80' : '#665AF2',
                        borderColor: index === 0 ? '#963333' : index === 1 ? '#967433' : index === 2 ? '#82B83F' : '#493FB8',
                      },
                    ]}
                  >
                    <Text style={styles.buttonTitle}>{feeling}</Text>
                  </View>
                </Pressable>
              ) : null}
            </Animated.View>
          ))}
        </View>

        <View style={styles.ArticlesContainer}>
          <Text style={styles.ArticlesTitle}> Preparamos esses Artigos para você! </Text>
        </View>

        <View style={styles.ArticlesBox}>
          <View style={styles.ArticlesHead}>
            <Text style={styles.ArticlesText}> Recomendados para sua mente </Text>
          </View>

          <View style={styles.ArticlesFlex}>

            <View style={styles.ArticlesDisplay}>
              <Pressable onPress={() => Linking.openURL('https://www.scielo.br/j/pusf/a/FKG4fvfsYGHwtn8C9QnDM4n/')}>
                <Image source={require('../assets/image/home/article-Image1.png')} style={styles.ArticlesImage} />
              </Pressable>

              <Text style={styles.ArticlesDescription}>Como lidar com as suas emoções?</Text>
            </View>

            <View style={styles.ArticlesDisplay}>

              <Pressable onPress={() => Linking.openURL('https://amenteemaravilhosa.com.br/aprenda-a-se-expressar-melhor/')}>
                <Image source={require('../assets/image/home/article-Image2.png')} style={styles.ArticlesImage} />
              </Pressable>
              <Text style={styles.ArticlesDescription}>Como se expressar melhor?</Text>

            </View>

          </View>

        </View>



      </SafeAreaView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  timeScrollContainer: {
    backgroundColor: '#fff',
    paddingVertical: '5%',
    marginVertical: '3%',
    elevation: 5,
  },
  storiesRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '150%', // Ajuste conforme necessário
    gap: 20,
  },
  feelingContainer: {
    marginTop: '5%',
    marginBottom: '1%',
    marginHorizontal: '1%'
  },
  feelingTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    marginHorizontal: '6%',
  },
  buttonPress: {
    marginHorizontal: '2%',
  },
  buttonBack: {
    padding: '5%',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    elevation: 5,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  ArticlesContainer: {
    marginTop: '12%',
    marginBottom: '8%',
    marginHorizontal: '1%'
  },
  ArticlesTitle: {
    fontSize: 22,
    fontWeight: '400',
  },
  ArticlesBox:{
    backgroundColor: '#fff',
    marginHorizontal: '2%',
    borderRadius: 10,
    elevation: 5,
    paddingVertical: '4%',
  },
  ArticlesHead: {
    paddingHorizontal: '2%',
    marginBottom: '5%',
  },
  ArticlesText: {
    fontSize: 20,
    fontWeight: '300',
  },
  ArticlesFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: '22%',
  }, 
  ArticlesDisplay: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5%',
    marginHorizontal: '10%',
    gap: 5
  },
  ArticlesImage: {
    width: 147,
    height: 144,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  ArticlesDescription: {
    fontSize: 11,
    fontWeight: '400',
    marginBottom: '15%',
  }


})