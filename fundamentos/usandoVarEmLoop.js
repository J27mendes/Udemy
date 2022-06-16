for(var i = 0; i<10; i++){
    console.log(i);
    console.log('i = ', i);
}
console.log('i = ', i);

//----------------------------------------
for(let j = 0; j<3; j++){
    console.log(j);
}
//console.log('j = ', j);
//----------------------------------------

const funcs = [];
for(var k = 0; k<4; k++){
    funcs.push(function(){
        console.log(k);
    });    
};

funcs[1]()
funcs[0]()

//-------------------------------------------

const jeitoCerto = [];
for(let l = 0; l<4; l++){
    jeitoCerto.push(function(){
        console.log('agora o numero é', l);
    });
};

jeitoCerto[1]()
jeitoCerto[0]()
