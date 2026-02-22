import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export const ProductoCarrito = ({ product, onPress }: any) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View>
                <Text style={styles.nombre}>{product.nombre}</Text>
                <Text style={styles.precio}>${product.precio}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#308999',
        padding: 15,
        marginVertical: 6,
        borderRadius: 8,
        elevation: 3,
    },
    nombre: { fontSize: 16, fontWeight: 'bold' },
    precio: { marginTop: 4 },
});

