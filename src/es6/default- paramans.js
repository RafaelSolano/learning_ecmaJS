//Parametros  opor defecto

function newUser ( name, age, country){
  var name = name || 'Rafael ';
  var age = age ||21;
  var country = country || "col"
  console.log(name, age,country);


}

newUser ()
newUser('Antonio ', 31, "col")

 function  newAdmin ( names = 'Antonio', age=19, country = "cl"){ 
 console.log(names, age , country);
}
newAdmin()
newAdmin('ana', 10, 'col')