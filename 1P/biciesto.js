var initYear = prompt("introduce el año");

if (((initYear % 4 == 0) && (initYear % 100 != 0 )) || (initYear % 400 == 0)){
    console.log( initYear + ' Es bisiesto. ');
  }

  else {
    console.log( initYear + ' No es bisiesto ');
  }