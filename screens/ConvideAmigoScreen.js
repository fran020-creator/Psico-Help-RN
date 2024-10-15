import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ConvideAmigoScreen = () => {
    const [friendContact, setFriendContact] = useState('')
    const navigation = useNavigation();

    const handleInvite = () => {
        if (!friendContact) {
            Alert.alert('Erro', 'Por favor, preencha o campo de contato do amigo.');
            return;
        }
        
        Alert.alert("Convite enviado!", `Um convite foi enviado para ${friendContact}`);
        setFriendContact('');
    };
    return (
        <SafeAreaView style={styles.container}>

            <View >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/image/profile/back-Icon.png')} />
                </TouchableOpacity>
            </View>
            <StatusBar backgroundColor="#e3e3e3" barStyle="dark-content" />
            <Text style={styles.title}>Convide um amigo</Text>
            <Text style={styles.description}>
                Convide seus amigos para se juntarem a nós e ganhe recompensas!
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Email ou Telefone"
                value={friendContact}
                onChangeText={setFriendContact}
            />
            <TouchableOpacity style={styles.button} onPress={handleInvite}>
                <Text style={styles.buttonText}>Enviar Convite</Text>
            </TouchableOpacity>
            {/* Opções de compartilhamento poderiam ser adicionadas aqui */}
        </SafeAreaView>
    );
}

export default ConvideAmigoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e3e3',
        padding: 20,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 30,
        color:'#9896F1'

    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#9e77dd',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
})