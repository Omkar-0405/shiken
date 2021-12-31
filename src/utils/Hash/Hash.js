
const CryptoJS = require("crypto-js");
//dot env for key
export const EncryptStringData = (data) => {
    let encryptedData = CryptoJS.AES.encrypt(data, 'my-secret-key@123').toString();
    return encryptedData
}

export const DecryptStringData= ( data ) => {
    let bytes  = CryptoJS.AES.decrypt(data, 'my-secret-key@123');
    let decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData
}


// for data = [... {.._},{.._}]
export const EncryptObjectData = (data) => {
    let encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
    return encryptedData
}

export const DecryptObjectData= ( data ) => {
    let bytes  = CryptoJS.AES.decrypt(data, 'secret key 123');
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData
}