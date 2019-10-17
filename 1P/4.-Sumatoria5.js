//Simple

let a=4;
let n=6;
let sum=0;
let elev=0;
for(let i=0;i<=n;i++){
   elev=Math.pow(a,i);
   sum=sum+elev;
}
console.log("Resultado de la sumatoria: "+sum);

//Con formula

let a2=4;
let n2=6;
let process=0;
let result=0;

process=Math.pow(a2,n2+1);
result=(process-1)/(a2-1);
console.log("Resultado con la formula "+result);

