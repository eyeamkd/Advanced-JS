const anIIFE = (()=>{
    let privateVariable = 0; 
    console.log(`Private variable Initialized : `, `${privateVariable}`);
    const privateManipulation = (value) => privateVariable+=value 
    return privateManipulation;
})() 

const result = anIIFE(10);
console.log(result);
console.log(anIIFE(20)); 
const second = anIIFE; 
console.log(second(40));