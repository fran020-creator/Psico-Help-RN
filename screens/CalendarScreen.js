import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Calendar } from 'react-native-calendars';


const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);

  const times = ["09:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

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

        <Image source={require('../assets/ProfilePic.png')} style={styles.doctorImage} />

        <View style={styles.doctorDetails}>
          <Text style={styles.doctorSpecialty}>Psicóloga</Text>
          <Text style={styles.doctorName}>Mônica Soares Albuquerque especialista em tcc</Text>
          <View style={styles.ratingContainer}>
            <Image source={require('../assets/StarFeedback.png')} />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.agendeButton}>
        <Text style={styles.agendeButtonText}>AGENDE SUA CONSULTA</Text>
      </TouchableOpacity>

    </View>

  )
}

export default CalendarScreen

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#f7f7f7',
    paddingHorizontal: 10
  },
  calendar: {
    borderRadius: 10,
    marginBottom: 30,
  },
  Logo: {

    width: 51,
    height: 49,
    marginTop: 30,
    marginLeft: 10

  },
  selectedDateText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#9e77dd'
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