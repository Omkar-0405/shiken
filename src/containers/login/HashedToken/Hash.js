var CryptoJS = require("crypto-js");

export const EncryptData = (data) => {
  var encryptedToken = CryptoJS.AES.encrypt(
    data,
    "my-secret-key@123"
  ).toString();
  console.log("entok :", encryptedToken);
  return encryptedToken;
};

export const DecryptedToken = (encryptedData) => {
  // var bytes = CryptoJS.AES.decrypt(<div>{encryptedData}</div> , 'my-secret-key@123');
  // var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  var bytes = CryptoJS.AES.decrypt(encryptedData, "my-secret-key@123");
  var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  console.log(" dectok  : ", decryptedData);
  return decryptedData;
};
