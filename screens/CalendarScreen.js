import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);

  const times = ["09:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

  const handleAgendamento = async () => {
    try {
      const userEmail = await AsyncStorage.getItem("userEmail");
      console.log("Email do usuário recuperado:", userEmail);  // Verifique se o e-mail é exibido corretamente

      if (!userEmail) {
        Alert.alert("Erro", "O email do usuário não foi encontrado.");
        return;
      }

      const agendamento = {
        data: selectedDate,
        hora: selectedTime,
        emailUsuario: userEmail
      };

      axios.post("http://10.0.2.2:8000/agendamento", agendamento).then((response) => {
        console.log(response);
        Alert.alert("Registrado com sucesso", "Você se registrou");
        setSelectedDate("");
        setSelectedTime("");
      }).catch((error) => {
        Alert.alert("ja existe uma consulta nesse horario", "Mude o horario");
        console.log("Registro falhou", error);
      });
    } catch (error) {
      console.log("Erro ao recuperar o email do usuário", error);
    }
  };


  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };


  return (
    <View style={styles.container}>

      <View>
        <Image source={require('../assets/image/calendar/psico-Icon.png')} style={styles.Logo} />
      </View>

      <View>
        <Text style={styles.selectedDateText}>
          {selectedDate ? `Data selecionada: ${selectedDate}` : 'Selecione uma data'}
        </Text>
      </View>

      <Calendar onDayPress={(day) => setSelectedDate(day.dateString)} markedDates={{
        [selectedDate]: { selected: true, selectedColor: '#9e77dd' }
      }}
        theme={{
          selectedDayBackgroundColor: '#9e77dd', todayTextColor: '#9e77dd',
          arrowColor: '#9e77dd',
          monthTextColor: '#9e77dd',
          textMonthFontWeight: 'bold',
          textSectionTitleColor: '#9e77dd'
        }}
        style={styles.calendar} />


      <ScrollView horizontal contentContainerStyle={styles.timeContainer}
        style={styles.timeScrollView}>
        {times.map((time, index) => (
          <TouchableOpacity key={index}
            style={[styles.timeButton,
            selectedTime === time && styles.SelectedTimeButton,
            ]}
            onPress={() => setSelectedTime(time)}>
            <Text style={[styles.timeText, selectedTime === time && styles.selectedTimeText,]}>
              {time}
            </Text>


          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.doctorContainer}>

        <Image source={require('../assets/image/calendar/profile-Pic-Icon.png')} style={styles.doctorImage} />

        <View style={styles.doctorDetails}>
          <Text style={styles.doctorSpecialty}>Psicóloga</Text>
          <Text style={styles.doctorName}>Mônica Soares Albuquerque especialista em tcc</Text>
          <View style={styles.ratingContainer}>
            <Image source={require('../assets/image/calendar/star-Feedback-Icon.png')} />
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => {handleAgendamento() }} style={styles.agendeButton}>
        <Text style={styles.agendeButtonText}>AGENDE SUA CONSULTA</Text>
      </TouchableOpacity>

    </View>

  )
}


const styles = StyleSheet.create({
  container: {

    backgroundColor: '#ececec',
    paddingHorizontal: 10
  },
  calendar: {
    borderRadius: 15,
    marginBottom: 30,
    elevation: 4,
  },
  Logo: {

    width: 51,
    height: 49,
    marginTop: 30,
    marginLeft: 10

  },
  selectedDateText: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black'
  },
  timeScrollView: {
    height: 100
  },
  timeContainer: {
    justifyContent: 'center',
    marginBottom: 40,

  },
  timeButton: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginHorizontal: 5,

  },
  SelectedTimeButton: {
    backgroundColor: '#9e77dd',
  },
  timeText: {
    color: '#000',
  },
  SelectedTimeText: {
    color: '#fff',
  },
  doctorContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5

  },

  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,

  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    color: '#888',
    marginBottom: 5,
    fontSize: 14
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  agendeButton: {
    backgroundColor: '#9e77dd',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 5,
    width: 200,
    alignItems: 'center',
    marginLeft: 90
  },

  agendeButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },


})