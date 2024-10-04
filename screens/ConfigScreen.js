import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'

export default function ConfigScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.containerScreen}>
            <StatusBar backgroundColor="#e3e3e3" barStyle="dark-content" />

            <View style={styles.iconsHeader}>
                <TouchableOpacity style={styles.buttonHead} onPress={() => navigation.navigate('Info')}>
                    <Image style={styles.imageHead} source={require('../assets/image/profile/back-Icon.png')} />
                </TouchableOpacity>
            </View>



        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    containerScreen: {
        flex: 1,
        backgroundColor: '#e3e3e3',
    },
})