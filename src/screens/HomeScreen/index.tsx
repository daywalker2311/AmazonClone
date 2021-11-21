import React from 'react';
import { FlatList, View, } from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {

    return (
        <View>
            <FlatList
                data={products}
                renderItem={({ item }) => {
                    return <ProductItem item={item} />
                }}
            />
        </View>
    )
}

export default HomeScreen;