import React from 'react';
import { View, FlatList } from 'react-native';
import { stylesGlobal } from '../../theme/appTheme';
import { ProductoCarrito } from '../components/ProductoCarrito';

export const productos = [
    { id: '1', nombre: 'Laptop', precio: 1200 },
    { id: '2', nombre: 'Celular', precio: 820 },
    { id: '3', nombre: 'Audífonos', precio: 50 },
];

export const ListadoScreens = ({ navigation }: any) => {
    return (
        <View style={stylesGlobal.container}>
            <FlatList
                data={productos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductoCarrito
                        product={item}
                        onPress={() =>
                            navigation.navigate('Detalle del producto', { producto: item })
                        }
                    />
                )}
            />
        </View>
    );
};