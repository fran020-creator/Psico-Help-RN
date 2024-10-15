import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ConfigScreen() {

    const navigation = useNavigation();

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

            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/image/profile/back-Icon.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Configurações</Text>
                <View style={styles.placeHolder}></View>
            </View>


            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.buttonPress} onPress={() => { navigation.navigate('Notificacao')}}>
                    <View style={styles.menuButton}>
                        <Image source={require('../assets/image/config/Noti-Icon.png')} style={styles.iconButton} />
                        <Text style={styles.buttonText}>Notificações</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPress}onPress={() => { navigation.navigate('Privacidade')}}>
                    <View style={styles.menuButton}>
                        <Image source={require('../assets/image/config/Lock-Icon.png')} style={styles.iconButton} />
                        <Text style={styles.buttonText}>Privacidade & Segurança</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPress} onPress={() => { navigation.navigate('Acessibilidade')}}>
                    <View style={styles.menuButton}>
                        <Image source={require('../assets/image/config/Acess-Icon.png')} style={styles.iconButton} />
                        <Text style={styles.buttonText}>Acessibilidade</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPress} onPress={() => { navigation.navigate('AjudaSuporte')}}>
                    <View style={styles.menuButton}>
                        <Image source={require('../assets/image/config/Help-Icon.png')} style={styles.iconButton} />
                        <Text style={styles.buttonText}>Ajuda & Suporte</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPress} onPress={() => { }}>
                    <View style={styles.menuButton}>
                        <Image source={require('../assets/image/config/Dark-Icon.png')} style={styles.iconButton} />
                        <Text style={styles.buttonText}>Modo Dark</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPress} onPress={() => { }}>
                    <View style={styles.menuButton}>
                        <Image source={require('../assets/image/config/Light-Icon.png')} style={styles.iconButton} />
                        <Text style={styles.buttonText}>Modo Light</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPress} onPress={() => { navigation.navigate('Sobre')}}>
                    <View style={styles.menuButton}>
                        <Image source={require('../assets/image/config/About-Icon.png')} style={styles.iconButton} />
                        <Text style={styles.buttonText}>Sobre</Text>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: '3%',
        paddingHorizontal: '4%',
        width: '100%',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    backIcon: {
        width: 33,
        height: 33,
    },
    placeHolder: {
        width: 33,
    },
    menuContainer: {
        backgroundColor: '#fff',
        marginVertical: '20%',
        marginHorizontal: '3%',
        borderRadius: 20,
        elevation: 5, //sombra para android
        shadowColor: '#000', // Sombra para iOS
      },
    buttonPress: {
        paddingHorizontal: '7%',
        paddingVertical: '4%',
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
        fontWeight: '600',
    },
    logoutText: {
        fontSize: 20,
        color: 'red',
        fontWeight: '600',
    },
});