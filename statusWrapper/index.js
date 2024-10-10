import { View, Image, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import styles from './styles';

const StatusWrapper = ({ visible, onClose}) => {

    // const [visible, setVisible] = useState(true);

    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                <View style={styles.statusTabContainer}>

                    <View style={styles.statusTab}></View>

                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/image/home/stories/img1.png')} resizeMode="contain" styles={styles.storieImage} />
                </View>
            </View>
        </Modal>
    );
};

export default StatusWrapper;
