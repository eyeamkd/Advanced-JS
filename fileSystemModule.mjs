import fs from "fs";

const readFile = () => {
  return fs.readFile("file.txt");
};

const writeFile = () => {
  return fs.writeFile("newFile.txt", "Hello from Node.js File System");
};

export { readFile, writeFile };
