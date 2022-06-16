console.log(Math.ceil(4.3));

const obj1 = {};
obj1.nome = 'Bola';
//obj['nome'] = 'Bola2'
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome
    this.executar = function(){
        console.log('Executando...')
    }
}

const obj2 = new Obj('Com machado');
const obj3 = new Obj('Com uma espada');
obj3.executar()
console.log(obj2.nome);
console.log(obj3.nome);
