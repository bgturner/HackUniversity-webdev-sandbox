function add(...nums){
    let total = 0;
    for( let num of nums ){
       total += num; 
    }
    return total;
}

let sub = (a,b) => { return a - b }

function exp(a, b){
    let total = a;
    for( let i = 1; i < b; i++ ){
        total *= a;
    }
    return total;
}
    
export default {
    add,
    sub,
    exp
}

