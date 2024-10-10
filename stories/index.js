import { View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';

import styles from './styles';
import StatusWrapper from '../statusWrapper';

const Stories = () => {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <Pressable onPress={() => {
                setVisible(true);
                console.log('stories pressed ...')
                }}>
                <View>
                    <View>
                        <Image source={require('../assets/image/home/stories-Mind-Photo.png')} />
                    </View>
                </View>
            </Pressable>
            {visible  && <StatusWrapper visible={visible} onClose={() => setVisible(false)} />}
        </>
    );
};

export default Stories;