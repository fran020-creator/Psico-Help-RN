import React from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PrivacidadeSegurancaScreen = () => {
    const navigation = useNavigation();
    return (

        <ScrollView contentContainerStyle={styles.container}>

            <View >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/image/profile/back-Icon.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Privacidade e Segurança</Text>

            <Text style={styles.sectionTitle}>Política de Privacidade</Text>
            <Text style={styles.description}>
                Nós valorizamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Todas as informações coletadas são utilizadas exclusivamente para melhorar sua experiência no aplicativo e para agendamento de consultas de forma segura.
            </Text>

            <Text style={styles.sectionTitle}>Dados Coletados</Text>
            <Text style={styles.description}>
                Coletamos informações como seu nome, e-mail e dados de agendamento para garantir que você possa acessar todos os serviços oferecidos pelo aplicativo. Esses dados são armazenados de forma segura e nunca serão compartilhados sem sua autorização.
            </Text>

            <Text style={styles.sectionTitle}>Proteção de Dados</Text>
            <Text style={styles.description}>
                Utilizamos práticas de segurança padrão do setor para proteger suas informações, incluindo criptografia e controle de acesso. Garantimos que suas informações sejam armazenadas em servidores seguros e protegidos contra acesso não autorizado.
            </Text>

            <Text style={styles.sectionTitle}>Dicas de Segurança</Text>
            <Text style={styles.description}>
                - Mantenha sua senha segura e evite compartilhá-la com outras pessoas.
                - Sempre use uma senha forte, combinando letras, números e caracteres especiais.
                - Caso suspeite de atividades suspeitas em sua conta, entre em contato imediatamente com nosso suporte.
            </Text>

            <Text style={styles.sectionTitle}>Contato</Text>
            <Text style={styles.description}>
                Se você tiver alguma dúvida sobre nossa política de privacidade ou precisar de ajuda, entre em contato conosco:
                {'\n'}Email:thiago@gmail.com
                {'\n'}Telefone:  (21) 99027-6666
            </Text>

            <Text style={styles.footer}>
                © 2024 PsicoHelp. Todos os direitos reservados.
            </Text>
        </ScrollView>
    );
}

export default PrivacidadeSegurancaScreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#e3e3e3',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#9896F1',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
        color: '#9896F1',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
        marginBottom: 10,
    },
    footer: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 14,
        color: '#888',
    },
})