import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const PixScreen = () => {
    const [pixKey, setPixKey] = useState('');
    const [amount, setAmount] = useState('');
    const [qrCodeUrl, setQrCodeUrl] = useState('')
    const navigation = useNavigation();

    const handlePixPayment = () => {
        if (!pixKey || !amount) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        const qrCodeData = `Chave: ${pixKey}, Valor: R$ ${amount}`;
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeData)}`;


        setQrCodeUrl(qrCodeUrl);
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />

            <View style={{ flex: 1 }} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/image/profile/back-Icon.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Pagamento via Pix</Text>

            <TextInput
                style={styles.input}
                placeholder="Chave Pix (CPF, CNPJ, e-mail, telefone)"
                value={pixKey}
                onChangeText={setPixKey}
                keyboardType="default"
            />

            <TextInput
                style={styles.input}
                placeholder="Valor (R$)"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.payButton} onPress={handlePixPayment}>
                <Text style={styles.payButtonText}>Gerar QR Code</Text>
            </TouchableOpacity>

            {qrCodeUrl ? (
                <View style={styles.qrCodeContainer}>
                    <Text style={styles.qrCodeText}>Escaneie o QR Code para pagamento:</Text>
                    <Image source={{ uri: qrCodeUrl }} style={styles.qrCodeImage} />
                </View>
            ) : null}
        </SafeAreaView>
    );
}

export default PixScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        justifyContent: 'center',
        paddingBottom: 300
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#9e77dd',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        borderColor: '#9e77dd',
        borderWidth: 1,
    },
    payButton: {
        backgroundColor: '#9e77dd',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    payButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    qrCodeContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    qrCodeImage: {
        width: 150,
        height: 150,
        marginBottom: -90
    },
    qrCodeText: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 16,
        color: '#333',
    },
})