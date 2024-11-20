import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import InfoScreen from '../screens/InfoScreen';
import PerfilScreen from '../screens/PerfilScreen';
import ConfigScreen from '../screens/ConfigScreen';
import ConsultasScreen from '../screens/ConsultasScreen';
import FormasPagamentosScreen from '../screens/FormasPagamentoScreen';
import ConvideAmigoScreen from '../screens/ConvideAmigoScreen';
import AjudaSuporteScreen from '../screens/AjudaSuporteScreen';
import SobreScreen from '../screens/SobreScreen';
import PrivacidadeSegurancaScreen from '../screens/PrivacidadeSegurancaScreen';
import AcessibilidadeScreen from '../screens/AcessibilidadeScreen';
import NotificacaoScreen from '../screens/NotificacaoScreen';
import PixScreen from '../screens/PixScreen';
import CartaoScreen from '../screens/CartaoScreen';
import DinheiroScreen from '../screens/DinheiroScreen';
import Home from '../assets/image/navigator/home-Icon.png';
import Calendar from '../assets/image/navigator/calendar-Icon.png';
import Jornal from '../assets/image/navigator/info-Icon.png';
import Perfil from '../assets/image/navigator/perfil-Icon.png';
import ModoDarkScreen from '../screens/ModoDarkScreen';
import BlackHomeIcon from '../assets/image/navigator/home-Icon-Full.png'



export default function StackNavigator() {
    const [activeTab, setActiveTab] = useState("Home");

    const checkLoggedInStatus = async () => {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
            // Se o token existe, navegue para a tela principal
            return "Main";
        }
        return "Login"; // Se não, navegue para a tela de login
    };

    const Tab = createBottomTabNavigator();

    function BottomTabs({navigation}) {
        return (
            <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? BlackHomeIcon : Home}
                            style={{ width: 27, height: 27, marginBottom: 1 }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            onPress={() => {
                                setActiveTab("Home");
                                navigation.navigate("Home");
                            }}
                            {...props}
                        />
                    ),
                    tabBarLabel: () => null,
                }}
            />

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

                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Config" component={ConfigScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Consultas" component={ConsultasScreen} options={{ headerShown: false }} />

                <Stack.Screen name="FormaPagamento" component={FormasPagamentosScreen} options={{ headerShown: false }} />

                <Stack.Screen name='ConvideAmigo' component={ConvideAmigoScreen} options={{ headerShown: false }} />

                <Stack.Screen name='AjudaSuporte' component={AjudaSuporteScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Sobre' component={SobreScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Privacidade' component={PrivacidadeSegurancaScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Acessibilidade' component={AcessibilidadeScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Notificacao' component={NotificacaoScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Pix' component={PixScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Cartao' component={CartaoScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Dinheiro' component={DinheiroScreen} options={{ headerShown: false }} />

                <Stack.Screen name='DarkMode' component={ModoDarkScreen} options={{headerShown:false}}/>
               

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})