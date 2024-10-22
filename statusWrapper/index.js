import { View, Text, Image, Modal, TouchableOpacity, Animated, Dimensions, StatusBar, Pressable } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const StatusWrapper = ({ statusData, visible, onClose }) => {

    const [current, setCurrent] = useState({ data: null, index: 0 });
    const { width } = Dimensions.get('window');

    useEffect(() => {
        if (visible && statusData.length > 0) {
            setCurrent({ data: statusData[0], index: 0 });
        }
    }, [visible, statusData]);

    useEffect(() => {

        const timer = setTimeout(() => {
            if (current.index === statusData.length - 1) {
                return onClose(true);
            }
            setCurrent({
                ...current,
                index: current.index + 1,
                data: statusData[current.index + 1]
            });
        }, 3000);
        return () => clearTimeout(timer);
    }, [current]);

    const ProgressView = () => {
        const progressAnim = useRef(new Animated.Value(0)).current;

        useEffect(() => {
            Animated.timing(
                progressAnim,
                {
                    toValue: (width - 10) / statusData.length,
                    duration: 3000,
                    useNativeDriver: false,
                }
            ).start();
        }, [progressAnim]);

        return (
            <Animated.Text style={{ backgroundColor: '#fff', width: progressAnim }}></Animated.Text>
        )
    };

    // Alterando a cor da StatusBar ao abrir o modal
    useEffect(() => {
        if (visible) {
            StatusBar.setBarStyle('light-content'); // Muda os ícones para claro
            StatusBar.setBackgroundColor('#000'); // Altera a cor de fundo da StatusBar
        } else {
            StatusBar.setBarStyle('dark-content'); // Reverte os ícones para escuro
            StatusBar.setBackgroundColor('#e3e3e3'); // Altera a cor de fundo padrão
        }

        return () => {
            StatusBar.setBarStyle('dark-content'); // Reverte ao padrão ao fechar
            StatusBar.setBackgroundColor('#e3e3e3'); // Altera para a cor padrão desejada
        };
    }, [visible]);

    return (
        <Modal visible={visible} transparent={false} animationType="slide">

            <SafeAreaView style={styles.container}>

                <View style={styles.statusTabContainer}>
                    {statusData.map((data, index) =>
                        <View key={index} style={styles.statusTab}>
                            {current.index === index ? <ProgressView /> : null}
                        </View>
                    )}
                </View>

                {/* <Pressable onPress={() => {onClose(true)}} style={styles.closeButton} >
                    <Image style={styles.close} source={require('../assets/image/home/close.png')} />
                </Pressable> */}

                <Image
                    source={current.data?.img}
                    style={styles.storiesBackground}
                    resizeMode="contain"
                >
                </Image>

                <TouchableOpacity
                    onPress={() => {
                        if (current.index === 0) {
                            return onClose(true)
                        };
                        setCurrent({
                            ...current,
                            index: current.index - 1,
                            data: statusData[current.index - 1],
                        });
                    }}
                    style={styles.controller}>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        if (current.index === statusData.length - 1) {
                            return onClose(true)
                        };
                        setCurrent({
                            ...current,
                            index: current.index + 1,
                            data: statusData[current.index + 1],
                        });
                    }}
                    style={[styles.controller, { right: 0, }]}>
                </TouchableOpacity>

            </SafeAreaView>
        </Modal>
    );
};

export default StatusWrapper;
