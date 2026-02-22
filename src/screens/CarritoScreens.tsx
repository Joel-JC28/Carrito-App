import React, { useLayoutEffect } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';

import { stylesGlobal } from '../../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


interface Props extends StackScreenProps<any, any> { }

export const CarritoScreens = ({ navigation }: Props) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => alert('Verifique su pedido')}
                    style={{ marginRight: 15 }}
                >
                    <Ionicons name="cart" size={24} color="#333" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={[stylesGlobal.container, { justifyContent: 'center', alignItems: 'center' }]}>

            <Text style={{ fontSize: 22 }}>Verifique sus productos</Text>
            <Text>Aquí aparecerán los productos agregados</Text>
            <Button
                title="Volver al inicio"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};
