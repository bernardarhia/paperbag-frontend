import localForage from "localforage";
import CryptoJS from 'crypto-js';

export const encryptData = async (data)=>{

    const cipherText = await CryptoJS.AES.encrypt(JSON.stringify(data),process.env.REACT_APP_SUPER_SECRET_KEY).toString();
    const newData = await localForage.setItem('users',cipherText)
    return newData;
}


export const decryptData = async (data)=>{
    const decrypted = await CryptoJS.AES.decrypt(data, process.env.REACT_APP_SUPER_SECRET_KEY);
    var decryptedData = await decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
}