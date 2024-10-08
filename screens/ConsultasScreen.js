import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, Button, FlatList, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ConsultasAgendadasScreen = () => {
    const [consultas, setConsultas] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchConsultas = async () => {
            try {
                const token = await AsyncStorage.getItem('authToken');
                const response = await axios.get('http://10.0.2.2:8000/agendamentos', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setConsultas(response.data); // Assume que a API retorna um array de consultas
            } catch (error) {
                console.error('Erro ao buscar consultas:', error);
                Alert.alert('Erro', 'Não foi possível carregar as consultas.');
            }
        };

        fetchConsultas();
    }, []); // O array vazio garante que o efeito rode apenas uma vez, como componentDidMount

    const handleDelete = async (id) => {
        try {
            const token = await AsyncStorage.getItem('authToken');
            await axios.delete(`http://10.0.2.2:8000/agendamentos/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setConsultas(prevConsultas => prevConsultas.filter(consulta => consulta._id !== id));
            Alert.alert('Sucesso', 'Consulta deletada com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar consulta:', error);
            Alert.alert('Erro', 'Não foi possível deletar a consulta.');
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text>Data: {item.data}</Text>
            <Text>Hora: {item.hora}</Text>
            <Button title="Deletar" onPress={() => handleDelete(item._id)} />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.iconsHeader}>
                <TouchableOpacity style={styles.buttonHead} onPress={() => navigation.goBack()}>
                    <Image style={styles.imageHead} source={require('../assets/image/profile/back-Icon.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Consultas Agendadas</Text>
                <FlatList
                    data={consultas}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    contentContainerStyle={styles.list}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#e3e3e3',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    list: {
        paddingBottom: 20,
    },
    itemContainer: {
        marginBottom: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

export default ConsultasAgendadasScreen;