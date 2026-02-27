import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { stylesGlobal } from '../../theme/appTheme';

export const ProductoCarrito = ({ product, onPress }: any) => {
    return (
        <TouchableOpacity style={stylesGlobal.card} onPress={onPress}>
            <View>
                <Text style={stylesGlobal.nombre}>{product.nombre}</Text>
                <Text style={stylesGlobal.precio}>${product.precio}</Text>
            </View>
        </TouchableOpacity>
    );
};

