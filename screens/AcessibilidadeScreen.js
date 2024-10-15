import React from 'react';
import { Text, StyleSheet, ScrollView, Image, TouchableOpacity,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AcessibilidadeScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/image/profile/back-Icon.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Acessibilidade</Text>

            <Text style={styles.sectionTitle}>Nossa Compromisso</Text>
            <Text style={styles.description}>
                Estamos comprometidos em tornar nosso aplicativo acessível a todos, incluindo pessoas com deficiências visuais, auditivas, motoras ou cognitivas. Nossa meta é garantir que todos possam usar nossos serviços de forma eficiente e confortável.
            </Text>

            <Text style={styles.sectionTitle}>Recursos de Acessibilidade</Text>
            <Text style={styles.description}>
                - **VoiceOver e TalkBack**: Nosso aplicativo é compatível com leitores de tela como VoiceOver (iOS) e TalkBack (Android). Isso ajuda usuários com deficiências visuais a navegar e interagir com o aplicativo.
                - **Contraste Alto**: Utilizamos uma paleta de cores com bom contraste para melhorar a visibilidade dos textos e botões.
                - **Tamanho de Texto Ajustável**: O aplicativo suporta o ajuste do tamanho da fonte para que os textos sejam exibidos de forma mais confortável.
                - **Descrições de Imagem**: Nossas imagens e ícones são acompanhados por descrições alternativas para que todos possam entender seu significado.
            </Text>

            <Text style={styles.sectionTitle}>Dicas de Uso</Text>
            <Text style={styles.description}>
                - Aumente o tamanho do texto nas configurações do seu dispositivo para facilitar a leitura.
                - Utilize gestos de zoom para ampliar partes específicas da tela.
                - Caso esteja utilizando um leitor de tela, explore os comandos por gestos para navegar entre os elementos de forma rápida.
            </Text>

            <Text style={styles.sectionTitle}>Feedback</Text>
            <Text style={styles.description}>
                Estamos constantemente trabalhando para melhorar a acessibilidade do nosso aplicativo. Se você tiver sugestões ou encontrar dificuldades, por favor, entre em contato:
                {'\n'}Email: acessibilidade@exemplo.com
                {'\n'}Telefone: (11) 1234-5678
            </Text>

            <Text style={styles.footer}>
                © 2024 PsicoHelp. Todos os direitos reservados.
            </Text>
        </ScrollView>
    )
}

export default AcessibilidadeScreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#ffffff',
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