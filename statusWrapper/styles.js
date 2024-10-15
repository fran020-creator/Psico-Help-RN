import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        // paddingHorizontal: '3%',
    },
    statusTabContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: '3%',
    },
    statusTab: {
        height: 3,
        marginHorizontal: 2,
        backgroundColor: '#bbbbbb',
        flex: 1,
    }, 
    storiesBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height / 0.8,    
    },
    controller: {
        position: 'absolute',
        width: width / 2,
        height: height * 0.9,
        bottom: 0,
    }
});

export default styles;