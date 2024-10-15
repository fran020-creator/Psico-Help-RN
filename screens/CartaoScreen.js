import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartaoScreen = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [savedCards, setSavedCards] = useState([]);
    const navigation = useNavigation();
    const handleExpiryDateChange = (text) => {

        const formattedText = text.replace(/\D/g, '');


        if (formattedText.length >= 3) {
            setExpiryDate(`${formattedText.substring(0, 2)}/${formattedText.substring(2, 4)}`);
        } else {
            setExpiryDate(formattedText);
        }
    };



    const handleSaveCard = () => {

        if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        const newCard = { cardNumber, cardHolder, expiryDate, cvv };
        setSavedCards([...savedCards, newCard])

        setCardNumber('');
        setCardHolder('');
        setExpiryDate('');
        setCvv('');


        Alert.alert('Sucesso', 'Cartão salvo com sucesso!');
    };

    const handleDeleteCard = (index) => {
        Alert.alert(
            'Confirmação',
            'Você tem certeza que deseja deletar este cartão?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Deletar',
                    onPress: () => {
                        const updateCards = savedCards.filter((_, cardIndex) => cardIndex !== index);
                        setSavedCards(updateCards);
                        Alert.alert('Sucesso', 'Cartão deletado com sucesso!');
                    },
                },
            ],
            { cancelable: true }
        );
    }

    const renderCard = ({ item, index }) => (
        <View style={styles.cardContainer}>
            <Text style={styles.cardText}>Número do Cartão: {item.cardNumber}</Text>
            <Text style={styles.cardText}>Titular: {item.cardHolder}</Text>
            <Text style={styles.cardText}>Validade: {item.expiryDate}</Text>
            <Text style={styles.cardText}>CVV: {item.cvv}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteCard(index)}>
                <Text style={styles.deleteButtonText}>Deletar</Text>
            </TouchableOpacity>
        </View>
    );




    return (
        <View style={styles.container}>

            <View >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/image/profile/back-Icon.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Adicionar Cartão de Crédito</Text>

            <TextInput
                style={styles.input}
                placeholder="Número do Cartão"
                keyboardType="numeric"
                value={cardNumber}
                onChangeText={setCardNumber}
                maxLength={16}
            />

            <TextInput
                style={styles.input}
                placeholder="Nome do Titular"
                value={cardHolder}
                onChangeText={setCardHolder}
            />

            <TextInput
                style={styles.input}
                placeholder="Data de Validade (MM/AA)"
                value={expiryDate}
                onChangeText={handleExpiryDateChange}
                keyboardType="numeric"
                maxLength={5}
            />

            <TextInput
                style={styles.input}
                placeholder="CVV"
                keyboardType="numeric"
                value={cvv}
                onChangeText={setCvv}
                maxLength={3} // Limite de 3 dígitos para o CVV
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleSaveCard}>
                <Text style={styles.saveButtonText}>Salvar Cartão</Text>
            </TouchableOpacity>

            {savedCards.length > 0 && (
                <FlatList
                    data={savedCards}
                    renderItem={renderCard}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.savedCardsList}
                />
            )}
        </View>
    );
}

export default CartaoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,

    },
    title: {
        paddingTop: 100,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#9896F1',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#9896F1',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardContainer: {
        marginBottom: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#f5f5f5',
    },
    cardText: {
        marginBottom: 5,
        fontSize: 14,
    },
    deleteButton: {
        backgroundColor: '#9896F1',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    savedCardsList: {
        marginTop: 20,
    },
})