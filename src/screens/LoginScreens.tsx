import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { stylesGlobal } from '../../theme/appTheme';
import { Context } from '../context/Context';

export const LoginScreen = ({ navigation }: any) => {
    const { login } = useContext(Context);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [show, setShow] = useState(false);

    const handleLogin = () => {

        if (!email || !pass) {
            Alert.alert('Complete todos los campos');
            return;
        }

        const ok = login(email, pass);

        if (!ok) Alert.alert('Credenciales incorrectas');
    };

    return (
        <View style={stylesGlobal.container}>

            <Text style={stylesGlobal.title}>Iniciar Sesión</Text>

            <TextInput
                placeholder="Email"
                style={stylesGlobal.input}
                onChangeText={setEmail}
            />

            <View style={stylesGlobal.passwordContainer}>
                <TextInput
                    placeholder="Contraseña"
                    secureTextEntry={!show}
                    style={stylesGlobal.passwordInput}
                    onChangeText={setPass}
                />

                <TouchableOpacity onPress={() => setShow(!show)}>
                    <Ionicons name={show ? 'eye-off' : 'eye'} size={22} />
                </TouchableOpacity>
            </View>

            <Button title="Iniciar sesión" onPress={handleLogin} />

            <View style={stylesGlobal.buttonCont}>
                <Button
                    title="Registrarse"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>

        </View>
    );
};