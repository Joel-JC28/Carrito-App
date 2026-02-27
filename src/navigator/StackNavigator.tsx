import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Context } from '../context/Context';
import { LoginScreen } from '../screens/LoginScreens';
import { RegistroScreen } from '../screens/RegistroScreens';
import { InicioScreens } from '../screens/InicioScreens';
import { DetalleScreens } from '../screens/DetalleScreens';
import { CarritoScreens } from '../screens/CarritoScreens';
import { ListadoScreens } from '../screens/listadoScreens';


const Stack = createStackNavigator();

export const StackNavigator = () => {
    const { user, logout } = useContext(Context);

    const headerButtons = (navigation: any) => ({
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate('Inicio')}
                style={{ marginLeft: 15 }}
            >
                <Ionicons name="home" size={22} />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity
                onPress={logout}
                style={{ marginRight: 20 }}
            >
                <Ionicons name="log-out-outline" size={28} />
            </TouchableOpacity>
        ),
    });

    return (
        <Stack.Navigator>

            {!user ? (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" options={{title:"Registro"}} component={RegistroScreen} />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Inicio"
                        component={InicioScreens}
                        options={({ navigation }) => headerButtons(navigation)}
                    />

                    <Stack.Screen
                        name="Listado de productos"
                        component={ListadoScreens}
                        options={({ navigation }) => headerButtons(navigation)}
                    />

                    <Stack.Screen
                        name="Detalle del producto"
                        component={DetalleScreens}
                        options={({ navigation }) => headerButtons(navigation)}
                    />

                    <Stack.Screen
                        name="Carrito de compras"
                        component={CarritoScreens}
                        options={({ navigation }) => headerButtons(navigation)}
                    />
                </>
            )}
        </Stack.Navigator>
    );
};