import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface ProductItemProps {
    item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice: number;
    }
}

const ProductItem = ({ item }: ProductItemProps) => {

    return (
        <View>
            <View style={styles.root}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>
                        {item.title}
                    </Text>
                    <View style={styles.ratingContainer}>
                        <FontAwesome name="star" size={18} />
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>from ${item.price}</Text>

                        {
                            item.oldPrice &&
                            <Text style={{ textDecorationLine: 'line-through' }}>${item.oldPrice}</Text>
                        }
                    </View>

                </View>
            </View>

        </View>
    )
}



export default ProductItem;