function getAdmins(map) {
    let admins = [];
   for([key, value] of map) {
       console.log([key, value]);
       if(value === 'Admin') {
           admins.push(key);
       }
   }
       console.log('Resultado:')
       return admins;
}


const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');


console.log(usuarios.size);

console.log(getAdmins(usuarios));

