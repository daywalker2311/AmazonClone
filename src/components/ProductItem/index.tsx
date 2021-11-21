import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ProductItem = () => {
    return (
        <View>
            <View style={styles.root}>
                <Image style={styles.image} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg' }} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>
                        Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
                    </Text>
                    <View style={styles.ratingContainer}>
                        <FontAwesome name="star" size={18} />
                    </View>
                    <Text style={styles.price}>from $69.69</Text>
                </View>
            </View>

        </View>
    )
}



export default ProductItem;