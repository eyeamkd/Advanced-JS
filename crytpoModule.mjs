import crypto from "crypto";
import fs from "fs";

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const getSHA256Hash = (input) => {
  const hash = crypto.createHash("sha256");
  hash.update(input);
  return hash.digest("hex");
};

const hashMD5 = (input) => {
  const hash = crypto.createHash("md5");
  hash.update(input);
  return hash.digest("hex");
};

const hashSHA1 = (input) => {
  const hash = crypto.createHash("sha1");
  hash.update(input);
  return hash.digest("hex");
};

function encryptFile(inputPath, outputPath) {
  const cipher = crypto.createCipheriv("aes-128-ccm", key, iv);
  const inputStream = fs.createReadStream(inputPath);
  const outputSteam = fs.createWriteStream(outputPath);
  inputStream.pipe(cipher).pipe(outputSteam);
}

function decryptFile(inputPath, outputPath){
    const cipher = crypto.createDecipheriv('aes-128-ccm', key, iv);
    const inputSteam = fs.createReadStream(inputPath);
    const outputSteam = fs.createWriteStream(outputPath);
    inputSteam.pipe(cipher).pipe(outputSteam);
}

export { getSHA256Hash, hashMD5, hashSHA1 };
