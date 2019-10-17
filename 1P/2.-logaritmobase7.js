function getBaseLog(base, numero) {
    return Math.log(numero) / Math.log(base);
  }
  
  console.log('El logaritmo base 7 de los primeros 10 números naturales se presenta a contunuación')
  for(i=1;i<=10;i++){
    console.log('log7 '+i+' = '+getBaseLog(7, i));
  }