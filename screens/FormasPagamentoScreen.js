import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function FormasPagamentosScreen() {
    const navigation = useNavigation();

    return (


        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />

            <View style={styles.header}>

                <Text style={styles.headerTitle}>Formas de Pagamento</Text>
                <View >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/image/profile/back-Icon.png')} />
                    </TouchableOpacity>
                </View>
            </View>



            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.buttonPress} onPress={() => { navigation.navigate('Pix') }}>
                    <View style={styles.menuButton}>
                        <Image source={require('../assets/image/pagamento/pix.png')} style={styles.iconButton} />
                        <Text style={styles.buttonText}>Pix</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPress} onPress={() => { navigation.navigate('Cartao') }}>
                    <View style={styles.menuButton}>
                        <Image source={require('../assets/image/pagamento/cartao.png')} style={styles.iconButton} />
                        <Text style={styles.buttonText}>Cartão</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPress} onPress={() => { navigation.navigate('Dinheiro') }}>
                    <View style={styles.menuButton}>
                        <Image source={require('../assets/image/pagamento/dinheiro.png')} style={styles.iconButton} />
                        <Text style={styles.buttonText}>Dinheiro</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 16,
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        backgroundColor: '#f5f5f5'
    },
    headerTitle: {
        paddingTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#9896F1',
        textAlign: 'center',
        marginBottom: -29
    },
    menuContainer: {
        margin: 16,
        borderRadius: 20,
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: '#000',
    },
    buttonPress: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    menuButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    iconButton: {
        width: 28,
        height: 28,
        marginRight: 16,
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
});