import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'



export const TareaScreen = () => {
    const { width, height } = useWindowDimensions();
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaAzul} />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        // justifyContent: 'space-between'
        justifyContent: 'center',
        alignItems: 'center'

    },
    cajaMorada: {
        // flex: 2,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856d6',
        // alignSelf: 'flex-end'
        // position: 'absolute',
        // right: 0
        // marginTop: 200


    },
    cajaNaranja: {
        // flex: 2,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#f0a23b',
        // marginLeft: 200
        marginTop: 100


        // alignSelf: 'center',
    },
    cajaAzul: {
        // flex: 4,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28c4d9',
        // alignSelf: 'center'
        // position: 'absolute',
        // bottom: 30
    },
});