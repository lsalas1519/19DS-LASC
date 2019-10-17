function getBaseLog(base, numero) {
    return Math.log(numero) / Math.log(base);
  }
  
  console.log('El logaritmo base 2 de los primeros 10 números naturales se presenta a contunuación')
  for(i=1;i<=10;i++){
    console.log('log2 '+i+' = '+getBaseLog(2, i));
  }