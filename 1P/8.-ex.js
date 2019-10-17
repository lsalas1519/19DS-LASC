console.log('e^x');

var x=prompt('Introduce el número que deseas calcular');
var res=0;
var e=1;

function factorial (n) {
    var total = 1; 
    if(n==0 || n==1){
        total=1;
    }
    else {
        for (let i=1; i<=n; i++) {
            total = total * i; 
        }
    }
	return total; 
}

for(let i=0;i<=10;i++){

        e=Math.pow(x,i)/factorial(i)
        res=res+e;
   
  }
 
  console.log('el resultado es '+ (res));