import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    statusTabContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: '3%',
    },
    statusTab: {
        flex: 1,
        height: 3,
        marginHorizontal: 2,
        backgroundColor: '#bbbbbb',
    }, 
    storiesBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height / 1.2,
    },
    controller: {
        position: 'absolute',
        width: width / 2,
        height: height * 0.9,
        bottom: 0,
    },
    closeButton: { 
        width: 27,
        height: 27,
        borderRadius: 10,
        marginVertical: '2%',
        marginHorizontal: '3%',
        alignSelf: 'flex-end',
        backgroundColor: 'yellow'
    },
    close: {
        width: 27,
        height: 27,
        tintColor: '#fff',
    },
});

export default styles;