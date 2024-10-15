import { View, Image, Pressable, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';

import styles from './styles';
import StatusWrapper from '../statusWrapper';

const Stories = ({stories}) => {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <Pressable onPress={() => {
                setVisible(true);
                console.log('stories pressed ...')
                }}>
                <View>
                    <View>
                        <Image style={styles.storiesPic} source={require('../assets/image/home/stories-Mind-Photo.png')} />
                    </View>
                </View>
            </Pressable>
            {visible  && <StatusWrapper statusData={stories.statusData} visible={visible} onClose={() => setVisible(false)} />}
        </>
    );
};

export default Stories;