let data = {
    nombre: "Luis",
    apellido: "Marin",
    edad: 30
}
let datos = Object.entries(data).map(function(valor, ident, copia){
    let obj= Object.assign({}, copia[0]);
    //  delete copia.edad;
    console.log(obj);
    console.log(valor);
    console.log(ident);
//     return obj;
})