// catalan (2n 
//           r/(n+1))
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 
let n3=parseInt(prompt("Ingrese el numero que desea averiguar"));
let factorial0=0;
let factorial1=0;
let factorial2=0;
let resutado=0;

factorial0= factorial(2*n3);
factorial1= factorial(n3+1);
factorial2=factorial(n3);
resultado=factorial0/(factorial1*factorial2);
console.log("El resultado de el numero catalan "+n3+" es: "+resultado);