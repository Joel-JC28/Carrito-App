import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { stylesGlobal } from '../../theme/appTheme';

//aqui


export const CarritoScreens = ({ navigation }: any) => {
   //aqui

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15 }}>
                    <Ionicons name="cart" size={24} color="#333" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={stylesGlobal.container}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
                se enlistan los productos
            </Text>
{/*aqui*/}
           
        </View>
    );
};