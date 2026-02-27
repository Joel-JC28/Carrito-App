import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#308999',
    background: '#9fbfe4',
    white: '#fff',
    text: '#333',
    danger: '#c0392b',
};

export const stylesGlobal = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background,
    },

    input: {
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 12,
    },

    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    passwordInput: {
        flex: 1,
        paddingVertical: 10,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonCont: {

        marginTop: 20,
        backgroundColor: "red",

    },

    card: {
        backgroundColor: '#7EACB5',
        padding: 15,
        marginVertical: 6,
        borderRadius: 8,
        elevation: 3,
    },
    nombre: { fontSize: 16, fontWeight: 'bold' },
    precio: { marginTop: 4 },
});