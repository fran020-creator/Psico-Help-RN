import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Alert, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default function CalendarScreen() {

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const times = ["09:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
  const navigation = useNavigation();

  const handleAgendamento = async () => {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      console.log("Email do usuário recuperado:", userEmail);  // Verifique se o e-mail é exibido corretamente

      const agendamento = {
        data: selectedDate,
        hora: selectedTime,
        emailUsuario: userEmail,
      };

      if (!userEmail) {
        Alert.alert("Erro", "O email do usuário não foi encontrado.");
        return;
      };

      axios.post("http://10.0.2.2:8000/agendamento", agendamento).then((response) => {
        console.log(response);
        Alert.alert("Sucesso!", "Você marcou sua consulta.");
        setSelectedDate("");
        setSelectedTime("");
      }).catch((error) => {
        Alert.alert("Por favor troque o horário!", "já existe uma consulta marcada.");
        console.log("O Registro falhou.", error);
      });
    } catch (error) {
      console.log("Erro ao recuperar o email do usuário.", error);
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.iconsHeader}>
        <Image source={require('../assets/image/calendar/psico-Icon.png')} style={styles.logoICon} />

        <TouchableOpacity onPress={() => navigation.navigate('Config')}>
          <Image source={require('../assets/image/calendar/config-Icon.png')} style={styles.configIcon} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.selectedDateTitle}> {selectedDate ? `Data selecionada ${selectedDate}` : 'Selecione uma data'} </Text>
      </View>

      <Calendar style={styles.calendar} onDayPress={(day) => handleDateSelect(day.dateString)} markedDates={{
        [selectedDate]: { selected: true, selectedColor: '#9e77dd' }
      }}
        theme={{
          selectedDayBackgroundColor: '#9e77dd', todayTextColor: '#9e77dd',
          arrowColor: '#9e77dd',
          monthTextColor: '#9e77dd',
          textMonthFontWeight: 'bold',
          textSectionTitleColor: '#9e77dd',
        }}
      />

      <ScrollView horizontal contentContainerStyle={styles.timeScrollContainer} showsHorizontalScrollIndicator={true}>
        {times.map((time, index) => (
          <TouchableOpacity key={index} style={[styles.timeButton, selectedTime === time && styles.selectedTimeButton,]} onPress={() => handleTimeSelect(time)}>
            <Text style={[styles.timeText, selectedTime === time && styles.selectedTimeText,]}>
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.doctorCard}>
        <Image source={require('../assets/image/calendar/profile-Pic-Icon.png')} style={styles.doctorImage} />

        <View style={styles.doctorDetails}>
          <Text style={styles.doctorSpecialty}>Psicóloga</Text>
          <Text style={styles.doctorName}>Mônica Soares Albuquerque especialista em tcc</Text>
          <View style={styles.ratingContainer}>
            <Image source={require('../assets/image/calendar/star-Feedback-Icon.png')} />
          </View>
        </View>
      </View>

      <View style={styles.agendeView}>
        <TouchableOpacity onPress={() => { handleAgendamento() }} style={styles.agendeButton}>
          <Text style={styles.agendeButtonText}>AGENDE SUA CONSULTA</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#e3e3e3',
  },
  iconsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '3%',
    marginVertical: '3%'
  },
  logoICon: {
    width: 51,
    height: 49,
  },
  selectedDateTitle: {
    fontSize: 22,
    color: 'black',
    marginBottom: '5%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  calendar: {
    paddingBottom: '1%',
    borderRadius: 15,
    marginHorizontal: '3%',
    // marginBottom: '5%',
    elevation: 5,
  },
  timeScrollContainer: {
    width: '100%',
    flexGrow: 1,
    flexDirection: 'row',
    minWidth: '130%', // Ajuste conforme necessário
    paddingHorizontal: '1%',
  },
  timeButton: {
    justifyContent: 'center',
    marginHorizontal: '2%',
    marginVertical: '4%',
    padding: '3%',
    backgroundColor: '#f0f0f0',
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 10,
    elevation: 2,
  },
  selectedTimeButton: {
    backgroundColor: '#9e77dd',
    borderWidth: 2,
    borderColor: '#8565BA',
  },
  timeText: {
    alignItems: 'center',
    color: '#000',
  },
  selectedTimeText: {
    color: '#fff',
  },
  doctorCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: '4%',
    paddingVertical: '5%',
    paddingHorizontal: '3%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: '3%',
  },
  doctorDetails: {
    justifyContent: 'center',
  },
  doctorName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    fontSize: 16,
    color: '#888',
    marginBottom: '1%',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: '1%',
  },
  agendeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: '5%',
  },
  agendeButton: {
    backgroundColor: '#9e77dd',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#8565BA',
    paddingHorizontal: '6%',
    paddingVertical: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  agendeButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
})