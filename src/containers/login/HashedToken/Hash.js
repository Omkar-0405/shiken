import React from "react";
var CryptoJS = require("crypto-js");


export const EncryptData = (token) => {
    var encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(token), 'my-secret-key@123').toString();
    console.log("entok :",encryptedToken)
    return encryptedToken
}

export const DecryptedToken = ( encryptedToken ) => {
    // var bytes = CryptoJS.AES.decrypt(<div>{encryptedToken}</div> , 'my-secret-key@123');
    // var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    var bytes  = CryptoJS.AES.decrypt(encryptedToken, 'my-secret-key@123');
    var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    console.log(" dectok  : ", decryptedData)
    return decryptedData
}