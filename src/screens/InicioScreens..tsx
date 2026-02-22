import React from 'react';
import { View, Text, Button } from 'react-native';
import { stylesGlobal } from '../../theme/appTheme';


export const InicioScreens = ({ navigation }: any) => {
    return (
        <View style={[stylesGlobal.container, { justifyContent: 'center', alignItems: 'center' }]}>


            <Text style={{ fontSize: 22, marginBottom: 20 }}>
                Tecnologías JC
            </Text>

            <Button
                title="Ver productos"
                onPress={() => navigation.navigate('Listado de productos')}
            />
        </View>
    );
};

