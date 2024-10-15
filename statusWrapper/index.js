import { View, Image, Modal, TouchableOpacity, Text, Animated, Dimensions } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const StatusWrapper = ({ statusData, visible, onClose }) => {

    const [current, setCurrent] = useState({ data: statusData[0], index: 0 });
    const { width } = Dimensions.get('window');

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
    }

    return (
        <Modal visible={visible} transparent={false} animationType="slide" onRequestClose={() => setModalVisible(false)}>

            <SafeAreaView style={styles.container}>

                <View style={styles.statusTabContainer}>
                    {statusData.map((data, index) =>
                        <View key={index} style={styles.statusTab}>
                            {current.index === index ? <ProgressView /> : null}
                        </View>
                    )}
                </View>


                <Image
                    source={current.data.img}
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
