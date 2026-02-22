import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetalleScreens } from '../screens/DetalleScreens';
import { CarritoScreens } from '../screens/CarritoScreens';
import { InicioScreens } from '../screens/InicioScreens.';
import { ListadoScreens } from '../screens/listadoScreens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Inicio" component={InicioScreens} />
            <Stack.Screen name="Listado de productos" component={ListadoScreens} />
            <Stack.Screen name="Detalle del producto" component={DetalleScreens} />
            <Stack.Screen name="Carrito de compras" component={CarritoScreens} />
        </Stack.Navigator>
    );
};