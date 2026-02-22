import React from 'react';
import { View, Text } from 'react-native';

export const CartItem = ({ item }: any) => {
    return (
        <View style={{ paddingVertical: 8 }}>
            <Text>{item.nombre} - ${item.precio}</Text>
        </View>
    );
};

