import CryptoJS from 'crypto-js';

const SECRET_KEY = 'taller-react-native';

export const encryptPassword = (password: string) =>
    CryptoJS.AES.encrypt(password, SECRET_KEY).toString();

export const decryptPassword = (cipher: string) => {
    const bytes = CryptoJS.AES.decrypt(cipher, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};