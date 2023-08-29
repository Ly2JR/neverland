import JSEncrypt from "./encryptlong";

const publicKey = "-----BEGIN PUBLIC KEY-----\n";
("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN\n");
("FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76\n");
("xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4\n");
("gwQco1KRMDSmXSMkDwIDAQAB\n");
("-----END PUBLIC KEY-----");

export function encrypt(data) {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(publicKey);
  const enData = encodeURIComponent(data);
  const result = jsEncrypt.encryptUnicodeLong(enData);
  return result;
}

export function decrypt(data) {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(publicKey);
  const result = jsEncrypt.decryptUnicodeLong(data);
  const decryptData = decodeURIComponent(result);
  return decryptData;
}
