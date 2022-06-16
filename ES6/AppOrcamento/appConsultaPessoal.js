/*class Data {
    constructor(anoData, mesData, diaData){
        this.anoData = anoData
        this.mesData = mesData
        this.diaData = diaData
    }
    verificandoData(){
        
    }
}
*/

class Despesas {
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this) {
            if(this[i] == undefined || this[i] == "" || this[i] == null){
                return false
            } else if(this.dia > 31 && this.mes == 1){
                return false
            } else if(this.dia > 28 && this.mes == 2){
                return false
            } else if(this.dia > 31 && this.mes == 3){
                return false
            } else if(this.dia > 30 && this.mes == 4){
                return false
            } else if(this.dia > 31 && this.mes == 5){
                return false
            } else if(this.dia > 30 && this.mes == 6){
                return false
            } else if(this.dia > 31 && this.mes == 7){
                return false
            } else if(this.dia > 31 && this.mes == 8){
                return false
            } else if(this.dia > 30 && this.mes == 9){
                return false
            } else if(this.dia > 31 && this.mes == 10){
                return false
            } else if(this.dia > 30 && this.mes == 11){
                return false
            } else if(this.dia > 31 && this.mes == 12){
                return false
            }
        }
        return true
    }
}

class BancoDados {

    constructor(){
        let id = localStorage.getItem("id")
        
        if(id == NaN || id == null/* || id === 'NaN'*/) {
            localStorage.setItem("id", 0)
        }        
    }

    getProximoId(){
        let proximoId = localStorage.getItem("id")
        return parseInt(proximoId) + 1
    }

    gravar(armazenandoDespesas){
        //localStorage.setItem('despesas', JSON.stringify(armazenandoDespesas))
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(armazenandoDespesas))

        localStorage.setItem("id", id)
    }

    recuperarRegistro(){
            //console.log('recuperando registro')
            //array de despesas
            let despesas = Array()
            let id = localStorage.getItem("id")

            //recuperar todas as despesas cadastradas no localstorage
            for(let i = 1; i <= id; i++) {
            // recuperar a despesa
            let despesa = JSON.parse(localStorage.getItem(i))
            
            if(despesa === null){
                continue
            }
            despesa.id = i
            despesas.push(despesa)
            //existe a possibilidade de haver índices que foram pulados/removidos
            //nestes casos nós vamos pular esses índices
            //console.log(i, despesa)
            }
            return despesas
        }
        
    pesquisar(despesas){
        let registroFiltrado = Array()
        registroFiltrado = this.recuperarRegistro()

        if(despesas.ano != ''){
            registroFiltrado = registroFiltrado.filter(indice => indice.ano == despesas.ano)
        }

        if(despesas.mes != ''){
            registroFiltrado = registroFiltrado.filter(indice => indice.mes == despesas.mes)
        }

        if(despesas.dia != ''){
            registroFiltrado = registroFiltrado.filter(indice => indice.dia == despesas.dia)
        }

        if(despesas.tipo != ''){
            registroFiltrado = registroFiltrado.filter(indice => indice.tipo == despesas.tipo)
        }

        if(despesas.descricao != ''){
            registroFiltrado = registroFiltrado.filter(indice => indice.descricao == despesas.descricao)
        }

        if(despesas.valor != ''){
            registroFiltrado = registroFiltrado.filter(indice => indice.valor == despesas.valor)
        }
        //console.log(bancoDados)
        //console.log(registroFiltrado)
        //console.log(despesas) 
        return registroFiltrado 
               
    }
    remover(id){
        localStorage.removeItem(id)
    }    
    
}  

let bancoDados = new BancoDados()

function cadastrarDespesas(){
    //ano, mes, dia, tipo, descricao, valor
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')
    
    
    let despesas = new Despesas(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

    //console.log(despesas)
    //console.log(/*ano.value,*/mes.value/*, dia.value, tipo.value, descricao.value, valor.value */)
    /*if(mes.value == 1 || mes.value == 3 || mes.value == 5 || mes.value == 7 || mes.value == 8 || mes.value == 10 || mes.value == 12){*/
                              
    /*let data = new Data(ano.value, mes.value, dia.value) 
    console.log(data)  */

        if(despesas.validarDados()){
            bancoDados.gravar(despesas)
            //dialog de sucesso
            document.getElementById('gravacao').innerHTML = 'Registro inserido com sucesso'
            document.getElementById('modalDivTitulo').className = 'modal-header text-success'        

            document.getElementById('confirmandoDespesa').innerHTML = 'A despesa foi criada com sucesso!'

            document.getElementById('retorno').innerHTML = 'Retornar'
            document.getElementById('retorno').className = 'btn btn-success'

            $('#modalDespesas').modal('show')
            //console.log('tudo ok')

            ano.value = ''
            mes.value = ''
            dia.value = ''
            tipo.value = ''
            descricao.value = ''
            valor.value = ''        
              
        } else {
                // dialog de erro
            document.getElementById('modalDivTitulo').className = 'modal-header text-danger'
            document.getElementById('gravacao').innerHTML = 'Erro ao tentar registrar'
            document.getElementById('confirmandoDespesa').innerHTML = 'Algum dos campos obrigatórios não está preenchido'

            document.getElementById('retorno').innerHTML = 'Retornar e corrigir'
            document.getElementById('retorno').className = 'btn btn-danger'
            $('#modalDespesas').modal('show')
        }
    }
    
    
        
function carregaListaDespesas(registroDespesa = Array(), filtro = false){
    //let registroDespesa = Array()
    if(registroDespesa.length <= 0 && filtro == false){
    registroDespesa = bancoDados.recuperarRegistro()
    }
    //console.log(registroDespesa)

    //selecionando o elemento da tbody da tabela
    let listaDasDespesas = document.getElementById('listaDespesas')
    listaDasDespesas.innerHTML = ''
    
    
        registroDespesa.forEach(function(registros){
            //criando a linha (tr)
            let linha = listaDasDespesas.insertRow()
            //console.log(registros)   

            linha.insertCell(0).innerHTML = `${registros.dia} / ${registros.mes} / ${registros.ano}`
            //ajustar o tipo
        switch(registros.tipo){

            case '1': registros.tipo = 'Alimentação'
                break
            case '2': registros.tipo = 'Educação'
                break
            case '3': registros.tipo = 'Lazer'
                break
            case '4': registros.tipo = 'Saúde'
                break
            case '5': registros.tipo = 'Transporte'
                break
        }
            linha.insertCell(1).innerHTML = registros.tipo
            linha.insertCell(2).innerHTML = registros.descricao                
            linha.insertCell(3).innerHTML = parseFloat(registros.valor).toFixed(2)
            
            

            //criar botão de exclusão
            let botao = document.createElement("button")
            botao.className = 'btn btn-danger'
            botao.innerHTML = '<i class="fas fa-times"></i>'
            botao.id = `registro de id ${registros.id}`
            botao.onclick = function(){
                //remover a despesa
                let id = this.id.replace('registro de id ', '')

                bancoDados.remover(id)
                window.location.reload()
            }
            linha.insertCell(4).append(botao)
            //console.log(registros)
        })
    }

    function pesquisarDespesa(){

        let ano = document.getElementById('ano').value
        let mes = document.getElementById('mes').value
        let dia = document.getElementById('dia').value
        let tipo = document.getElementById('tipo').value
        let descricao = document.getElementById('descricao').value
        let valor = document.getElementById('valor').value

        let despesa = new Despesas(ano, mes, dia, tipo, descricao, valor)

        let registroDespesa = bancoDados.pesquisar(despesa) 

        carregaListaDespesas(registroDespesa, true)
               
    }

   