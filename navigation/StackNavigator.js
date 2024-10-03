import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Perfil from '../assets/Perfil.png'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import Home from '../assets/Home.png';
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Jornal from '../assets/Journal.png'
import Calendar from '../assets/Calendar.png'
import PerfilScreen from '../screens/PerfilScreen'
import CalendarScreen from '../screens/CalendarScreen'
import JornalScreen from '../screens/JornalScreen'
import { setStatusBarBackgroundColor } from 'expo-status-bar'
const StackNavigator = () => {
    const Tab = createBottomTabNavigator();

    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{headerShown:false,tabBarButton:(props)=>(<TouchableOpacity onPress={()=>navigation.navigate("Home")}
                    {...props}>
                            <Image source={Home} style={{width:25,height:25,marginBottom:10}}/>

                    </TouchableOpacity>),
                    tabBarLabel:()=>null,
                        
                    }}/>
                <Tab.Screen
                    name="Jornal"
                    component={JornalScreen}
                    options={{headerShown:false,tabBarButton:(props)=>(<TouchableOpacity onPress={()=>navigation.navigate("Jornal")}
                    {...props}>
                            <Image source={Jornal} style={{width:25,height:25,marginBottom:10}}/>

                    </TouchableOpacity>),
                    tabBarLabel:()=>null,
                        
                    }}
                     />

                <Tab.Screen
                    name="Calendar"
                    component={CalendarScreen}
                    options={{headerShown:false,tabBarButton:(props)=>(<TouchableOpacity onPress={()=>navigation.navigate("Calendar")}
                    {...props}>
                            <Image source={Calendar} style={{width:25,height:25,marginBottom:10}}/>

                    </TouchableOpacity>),
                    tabBarLabel:()=>null,
                        
                    }} />

                <Tab.Screen 
                    name="Perfil"
                    component={PerfilScreen}
                    options={{headerShown:false,tabBarButton:(props)=>(<TouchableOpacity onPress={()=>navigation.navigate("Perfil")}
                    {...props}>
                            <Image source={Perfil} style={{width:25,height:25,marginBottom:10}}/>
                    </TouchableOpacity>),
                    tabBarLabel:()=>null,
                        
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

                <Stack.Screen name="Calendar" component={CalendarScreen} options={{headerShown:false}}/>

                <Stack.Screen name="Jornal" component={JornalScreen} options={{headerShown: false}}/>

                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})