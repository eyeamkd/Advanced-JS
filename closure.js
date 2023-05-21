let globalVariable = 10;

function parentFunction(){
    let functionVariable = 20; 

    console.log("Parent Function Scope", functionVariable); 

    function childFunction(){
        let childFunctionVariable = 30; 
        globalVariable+=10;
        functionVariable+=10; 
        childFunctionVariable+=10;

        console.log("Global Scope", globalVariable); 
        console.log("Parent Function Scope", functionVariable); 
        console.log("Child Function Variable ", childFunctionVariable);
    } 

    return childFunction;

} 


const result = parentFunction();
result();
result();