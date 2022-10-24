function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(2,5))


let v = function(x){ return x*2 }
console.log(v())

//fatorial
function fatorial(n){
    var fat = 1
    for(var i; i > 1; i++)
    {
        fat *= i
    }

    return fat
}

console.log(fatorial(n))