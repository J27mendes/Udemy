var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var impar = [];
var par = [];
for(var i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0 ){
        par = numeros[i];
        console.log("este numero é par= "+par)
        } else {
            impar = numeros[i];
            console.log("este numero é impar= "+impar);
            
        }; 
};


