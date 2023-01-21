//Declarar , asignar, reasignar


//Declarar y asignar con var la variable tiene scope global
var lastName = 'Rafael solano' 
console.log(lastName);

lastName= 'Antonio'  //Reasignar valor de la la variable
console.log(lastName);


//Declara y asignar con let tiene un alcance local
let fruta ="Mango";
console.log(fruta);

fruta = 'papaya';//Reasignar valor de la la variable
console.log(fruta);

//Declara una variable con const
const animal ='dog'
console.log(animal);

//animal = 'cat';//no se puede reasignar el valor de una constante
console.log(animal );

const fruits =() =>{
  if ( true){
    var  fruit1='banana';
    let fruit2 ='apple';
    const fruit3 = 'kiwi';
  }
  console.log(fruit1);
  
  
}
fruits()