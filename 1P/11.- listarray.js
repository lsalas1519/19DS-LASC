var arreglo = [1,1,6,6,7,7,5,6,78,9,4,0,0];

function list(x){
    var x = x.sort(function(a, b){return a-b});
    var lista = new Array
    var contador = 0;
    for(c1 = 0; c1 < x.length; c1++){
        var iguales = 1;
        if(x[c1]==x[c1+1]){
            //REVISA SI SE REPITEN
            for(c2 = c1+1; c2 < x.length; c2++){
                //CUENTA LOS REPETIDOS
                if(x[c1]==x[c2]) iguales++;
            }
        }

        lista[contador] = iguales;
        lista[contador+1] = x[c1];
        contador = contador + 2;
        c1 = c1 + iguales -1;
    }
    return lista;
}
//LA LISTA SE IMPRIME EN ORDEN QUE NOS DICE CUANTOS DE CUALES HAY...
list(arreglo)