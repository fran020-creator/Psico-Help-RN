import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const NotificacaoScreen = () => {
  const [isEnabledPush, setIsEnabledPush] = useState(true);
  const [isEnabledEmail, setIsEnabledEmail] = useState(true);
  const [isEnabledSms, setIsEnabledSms] = useState(false);
  const navigation = useNavigation();
  const toggleSwitchPush = () => setIsEnabledPush(previousState => !previousState);
  const toggleSwitchEmail = () => setIsEnabledEmail(previousState => !previousState);
  const toggleSwitchSms = () => setIsEnabledSms(previousState => !previousState);
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/profile/back-Icon.png')} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Notificações</Text>

      <View style={styles.notificationOption}>
        <Text style={styles.optionText}>Notificações Push</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#9896F1' }}
          thumbColor={isEnabledPush ? '#9896F1' : '#f4f3f4'}
          onValueChange={toggleSwitchPush}
          value={isEnabledPush}
        />
      </View>

      <View style={styles.notificationOption}>
        <Text style={styles.optionText}>Notificações por Email</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#9896F1' }}
          thumbColor={isEnabledEmail ? '#9896F1' : '#f4f3f4'}
          onValueChange={toggleSwitchEmail}
          value={isEnabledEmail}
        />
      </View>

      <View style={styles.notificationOption}>
        <Text style={styles.optionText}>Notificações por SMS</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#9896F1' }}
          thumbColor={isEnabledSms ? '#9896F1' : '#f4f3f4'}
          onValueChange={toggleSwitchSms}
          value={isEnabledSms}
        />
      </View>

      <Text style={styles.description}>
        Você pode personalizar as notificações para se manter informado sobre atualizações importantes, lembretes de consultas e ofertas especiais.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 PsicoHelp. Todos os direitos reservados.</Text>
      </View>
    </ScrollView>
  );
}

export default NotificacaoScreen

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#e3e3e3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#9896F1',
  },
  notificationOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
})