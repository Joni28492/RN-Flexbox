import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
// const { width, height } = Dimensions.get('window')

export const DimenionesScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.6//o mas de 1 scroll 
                }} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.title}>W: {Math.floor(width)}, H: {Math.floor(height)} </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },

    cajaMorada: {
        backgroundColor: '#5856d6',
        // width: '50%',
        height: '50%',//relativo al padre
    },
    cajaNaranja: {
        backgroundColor: '#f0a23b'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
});
