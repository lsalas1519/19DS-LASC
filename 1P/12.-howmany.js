function Many(x){
    var x = x.sort(function(a, b){return a-b});
    var iguales = 0;
    for(c1 = 0; c1 < x.length; c1++){
        if(x[c1]==x[c1+1]){
            //si hay iguales entra al ciclo que los cuenta
            for(c2 = c1+1; c2 < x.length; c2++){
                //cuanta los que se son iguales
                if(x[c1]==x[c2]) iguales++;
            }
        }
        // acumulador
        c1= c1+iguales;
    }
    return iguales;
}


let array1=[3,2,3]
let array2=[3,2,1]

console.log(Many(array1));
console.log(Many(array2));