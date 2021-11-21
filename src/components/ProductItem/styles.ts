import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 10,
        borderColor: 'lightgray',
        borderWidth: 0.5,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    image: {
        height: 150,
        flex: 3,
        resizeMode: 'contain'
    },
    rightContainer: {
        flex: 3,
        padding: 10,
    },
    title: {
        fontSize: 18,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    ratingContainer: {

    }
});

export default styles;