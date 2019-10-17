function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 

//P(n,r) = n! / (n-r)!

let n=5;
let r=2;
let result=0;
let fact=0;
let fact2=0;
fact=factorial(n);
fact2=factorial(n-r);
result=fact/fact2;
console.log(result +" Permutaciones");
