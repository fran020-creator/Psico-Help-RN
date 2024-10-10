import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        paddingHorizontal: '3%',
    },
    statusTabContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: '3%',
    },
    statusTab: {
        height: 3,
        backgroundColor: '#bbbbbb',
        flex: 1,
    },
    imageContainer: {
        backgroundColor: '#222',
        flex: 1,
    },
    storieImage: {
        width: '100%',
        height: height / 1.2,
        maxHeight: height / 1.2,
    },
});

export default styles;