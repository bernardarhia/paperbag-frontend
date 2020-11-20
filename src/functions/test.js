import localForage from "localforage";
import CryptoJS from 'crypto-js';

export const encryptData = async (data)=>{

    const cipherText = await CryptoJS.AES.encrypt(JSON.stringify(data),'1234567').toString();
    const newData = await localForage.setItem('users',cipherText)
    return newData;
}


export const decryptData = async (data)=>{
    const decrypted = await CryptoJS.AES.decrypt(data, '1234567');
    var decryptedData = await decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
}