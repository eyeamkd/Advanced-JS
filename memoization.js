const memo = {}

function fibonacci(n){
    if(n===0 || n==1){
        return n;
    }else{
        if(!memo[n])
            return memo[n]
        else
        memo[n] = fibonacci(n-1)+fibonacci(n-2)
        return memo[n]
    }
}

export default fibonacci