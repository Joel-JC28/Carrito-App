import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { stylesGlobal } from '../../theme/appTheme';
//aqui


export const DetalleScreens = ({ route, navigation }: any) => {
    const { producto } = route.params;
//aqui

    return (
        <View style={stylesGlobal.container}>
            <Text style={{ fontSize: 20 }}>{producto.nombre}</Text>
            <Text style={{ fontSize: 18, marginVertical: 10 }}>
                ${producto.precio}
            </Text>

            <Button
                title="Agregar al carrito"
                onPress={() => {
//aqui
                    navigation.navigate('Carrito de compras');
                }}
            />
        </View>
    );
};