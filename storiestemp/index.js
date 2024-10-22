import { View, Image, Pressable, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { statusData } from '../helpers/defaultData'

import styles from './styles';
import StatusWrapper from '../statusWrapper';

const Stories = ({ story }) => {

    const [visible, setVisible] = useState(false);

    return (
        <>
                    <Pressable onPress={() => setVisible(true)}>
                        <Image style={styles.storiesPic} source={story.icon} />
                    </Pressable>
                
            {visible && (
                <StatusWrapper
                    statusData={story.statusData}
                    visible={visible}
                    onClose={() => setVisible(false)}
                />
            )}
        </>
    );
};

export default Stories;