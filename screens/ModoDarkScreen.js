import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EmConstrucaoScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1c1c1e" barStyle="light-content" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/profile/back-Icon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Em Construção</Text>
      </View>

      <View style={styles.content}>
        <Image source={require('../assets/image//config/construction-icon.png')} style={styles.constructionIcon} />
        <Text style={styles.message}>Essa funcionalidade está em construção. Em breve estará disponível!</Text>
      </View>
    </SafeAreaView>
  );
};

export default EmConstrucaoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  constructionIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
