import React, { useContext, useState } from 'react';
import { View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { stylesGlobal } from '../../theme/appTheme';
import { Context } from '../context/Context';

export const RegistroScreen = ({ navigation }: any) => {
    const { registro } = useContext(Context);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [show, setShow] = useState(false);

    return (
        <View style={stylesGlobal.container}>

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

            <Button
                title="Registrar"
                onPress={() => {
                    registro(email, pass);
                    navigation.goBack();
                }}
            />

        </View>
    );
};