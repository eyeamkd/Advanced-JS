import { dropRight } from "./arrayModule.mjs";
import { getSHA256Hash, hashMD5, hashSHA1 } from "./crytpoModule.mjs";
import { removeArrayElements } from "./loadashModule.mjs"; 


// console.log("SHA 256 Hash", getSHA256Hash('kunal')); 
// console.log("MD5 Hash", hashMD5('kunal'));
// console.log("SHA1 Hash", hashSHA1('kunal')); 

const arr = [1,2, 3,4, 5]
console.log(removeArrayElements(arr, 2));
console.log(dropRight(arr, 2));

