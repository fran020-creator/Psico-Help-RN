import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Alert,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DinheiroScreen = () => {
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(0); 
    const navigation = useNavigation();

    const handleAddMoney = () => {
        if (!amount) {
            Alert.alert('Erro', 'Por favor, insira um valor.');
            return;
        }

        const amountNumber = parseFloat(amount);
        if (isNaN(amountNumber) || amountNumber <= 0) {
            Alert.alert('Erro', 'Por favor, insira um valor válido.');
            return;
        }

       
        setBalance(prevBalance => prevBalance + amountNumber);
        Alert.alert('Sucesso', `Valor de R$ ${amount} adicionado com sucesso!`);
        setAmount(''); 
    };

    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.buttonHead} onPress={() => navigation.goBack()}>
                    <Image style={styles.imageHead} source={require('../assets/image/profile/back-Icon.png')} />
                </TouchableOpacity>

            <Text style={styles.title}>Adicionar Dinheiro</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite o valor (ex: 100.00)"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={handleAddMoney}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>

            <View style={styles.balanceContainer}>
                <Text style={styles.balanceTitle}>Seu saldo atual:</Text>
                <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text> 
            </View>
        </View>
    );
}

export default DinheiroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color:'#9896F1'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#9896F1',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    balanceContainer: {
        marginTop: 40,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    balanceTitle: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    balance: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#9896F1',
    },
});
