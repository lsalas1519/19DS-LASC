function fac(factor){
    let res = 1;
    for(let i = 1 ; i <= factor ; i++){
        res = res * i;
    }
    return(res);
}

function perm(n, r){
    return fac(n)/(fac(n-r))
}

function comb(n, r){
    return perm(n,r)/fac(r)
}
console.log(perm(10,8)+" Combinaciones")

