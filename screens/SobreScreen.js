import React from 'react';
import { Text, StyleSheet, ScrollView, Image, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SobreScreen = () => {

    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/image/profile/back-Icon.png')} />
                </TouchableOpacity>
            </View>

            <Image source={require('../assets/image/register/logo-Login.png')} style={styles.logo} />

            <Text style={styles.title}>Sobre o Aplicativo</Text>

            <Text style={styles.description}>
                Este aplicativo foi desenvolvido para fornecer suporte psicológico e agendamento de consultas de maneira rápida e acessível.
                Nosso objetivo é ajudar as pessoas a encontrarem o apoio de que precisam, oferecendo uma plataforma intuitiva e fácil de usar.
            </Text>

            <Text style={styles.sectionTitle}>Recursos:</Text>
            <Text style={styles.description}>
                - Agendamento fácil e rápido de consultas com profissionais qualificados.
                - Acompanhamento das suas consultas diretamente pelo aplicativo.
                - Receba lembretes de suas consultas para não perder nenhum compromisso.
            </Text>

            <Text style={styles.sectionTitle}>Contato:</Text>
            <Text style={styles.description}>
                Se você tiver dúvidas ou precisar de ajuda, entre em contato conosco:
                {'\n'}Email: thiago@gmail.com
                {'\n'}Telefone: (21) 99027-6666
            </Text>

            <Text style={styles.footer}>
                © 2024 PsicoHelp. Todos os direitos reservados.
            </Text>
        </ScrollView>
    );
}

export default SobreScreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 30,
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 193,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20,
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