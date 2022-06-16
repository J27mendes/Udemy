{
    {
        {
            {
                // ou o var ser declarado globalmente
                var igual = 'será ???'
                console.log(igual);

            }
        }
    }
}

var fora = 1
{
    var dentro = 2
    console.log('dentro = ', dentro)
}
console.log('fora = ', fora);


function teste(){
    // ou o var será declarado somente num escopo de funcão
    var testando = "que vou te ver?"
    console.log(testando);
}
teste();


//---------------------------------------------------------


