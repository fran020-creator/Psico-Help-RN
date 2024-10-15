import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Linking, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AjudaSuporteScreen = () => {
    const navigation = useNavigation();
    const handleContactSupport = () => {
        Linking.openURL('https://mail.google.com/mail/u/0/#inbox?compose=new');
    };
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/image/profile/back-Icon.png')} />
                </TouchableOpacity>
            </View>
            <StatusBar backgroundColor="#e3e3e3" barStyle="dark-content" />
            <Text style={styles.title}>Ajuda e Suporte</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Perguntas Frequentes (FAQ)</Text>
                <TouchableOpacity style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como faço para resetar minha senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como posso contatar o suporte?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Onde posso ver minhas consultas marcadas?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contato com Suporte</Text>
                <TouchableOpacity style={styles.contactButton} onPress={handleContactSupport}>
                    <Text style={styles.contactText}>Enviar Email para Suporte</Text>
                </TouchableOpacity>
                <Text style={styles.contactInfo}>Ou ligue para: (21) 99027-6666</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Dicas Úteis</Text>
                <Text style={styles.tip}>1. Mantenha seu aplicativo sempre atualizado.</Text>
                <Text style={styles.tip}>2. Verifique sua conexão com a internet se estiver com problemas.</Text>
                <Text style={styles.tip}>3. Consulte nossa documentação online para mais informações.</Text>
                <TouchableOpacity>
                    <Text style={styles.faqQuestion}>Link da documentação</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

export default AjudaSuporteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e3e3',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#9896F1'
    },
    section: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#9896F1'
    },
    faqItem: {
        paddingVertical: 10,
    },
    faqQuestion: {
        fontSize: 16,
        color: '#007BFF',
    },
    contactButton: {
        backgroundColor: '#9896F1',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    contactText: {
        color: '#fff',
        fontSize: 16,
    },
    contactInfo: {
        fontSize: 16,
        marginTop: 5,
    },
    tip: {
        fontSize: 16,
        marginVertical: 5,
    },
})