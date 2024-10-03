import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import CalendarScreen from '../screens/CalendarScreen'
import InfoScreen from '../screens/InfoScreen'
import PerfilScreen from '../screens/PerfilScreen'
import Home from '../assets/image/navigator/home-Icon.png';
import Calendar from '../assets/image/navigator/calendar-Icon.png'
import Jornal from '../assets/image/navigator/info-Icon.png'
import Perfil from '../assets/image/navigator/perfil-Icon.png'
import { setStatusBarBackgroundColor } from 'expo-status-bar'
const StackNavigator = () => {
    const Tab = createBottomTabNavigator();

    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false, tabBarButton: (props) => (<TouchableOpacity onPress={() => navigation.navigate("Home")}
                            {...props}>
                            <Image source={Home} style={{ width: 27, height: 27, marginBottom: 10 }} />

                        </TouchableOpacity>),
                        tabBarLabel: () => null,

                    }} />

                <Tab.Screen
                    name="Calendar"
                    component={CalendarScreen}
                    options={{
                        headerShown: false, tabBarButton: (props) => (<TouchableOpacity onPress={() => navigation.navigate("Calendar")}
                            {...props}>
                            <Image source={Calendar} style={{ width: 27, height: 27, marginBottom: 10 }} />

                        </TouchableOpacity>),
                        tabBarLabel: () => null,

                    }} />

                <Tab.Screen
                    name="Info"
                    component={InfoScreen}
                    options={{
                        headerShown: false, tabBarButton: (props) => (<TouchableOpacity onPress={() => navigation.navigate("Info")}
                            {...props}>
                            <Image source={Jornal} style={{ width: 27, height: 27, marginBottom: 10 }} />

                        </TouchableOpacity>),
                        tabBarLabel: () => null,

                    }} />

                <Tab.Screen
                    name="Perfil"
                    component={PerfilScreen}
                    options={{
                        headerShown: false, tabBarButton: (props) => (<TouchableOpacity onPress={() => navigation.navigate("Perfil")}
                            {...props}>
                            <Image source={Perfil} style={{ width: 27, height: 27, marginBottom: 10 }} />
                        </TouchableOpacity>),
                        tabBarLabel: () => null,

                    }} />

            </Tab.Navigator>


        )

    }

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />

                <Stack.Screen name="Perfil" component={PerfilScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Info" component={InfoScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})