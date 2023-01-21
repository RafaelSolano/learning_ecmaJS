//documentacion
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions



//funcion normal

function square (num){
  return num * num
}
console.log(square(2));

/* -------------------------------------------------------------------------- */

//funcion flecha  arrow funtion
 const square2 = (num)=>{
  return num*num;
 }
 console.log(square2(2));

/* -------------------------------------------------------------------------- */
 //arrow function si solo se tien un parametro  sin parentesis
 const square3 =num  => num * num;
console.log(square3(2));

/* -------------------------------------------------------------------------- */