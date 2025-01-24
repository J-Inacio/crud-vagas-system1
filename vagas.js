let vagas = [
    {
    nome: "TI",
    descricao: "Vaga ajudante de TI",
    dataLimite: "15/03/2025",
    candidatos: ["João", "Maria", "Julio", "Pedro"]
    },
    {
        nome: "Ajudante de Pedreiro",
        descricao: "auxiliar nas obras",
        dataLimite: "16/04/2025",
        candidatos: ["Marcio", "Fred"]
    },
    {
        nome: "Eletricista",
        descricao: "auxiliar nas manutenções elétricas",
        dataLimite: "20/07/2025",
        candidatos: []
    }

]


function exibirMenu() {
    let resposta = prompt("Bem vindo ao sistema de vagas ! escolha uma dentre as opções listadas:\n1. Listar vagas disponíveis\n2. Criar uma nova vaga\n3. Visualizar uma vaga\n4. Inscrever um candidato em uma vaga\n5. Excluir vaga\n0. Sair")
    return resposta
}

function listarVagas(){

    if(vagas.length === 0) {
        alert("Não existe nenhuma vaga disponível no momento...")
        return ""
    } 

    let textoFormatado = ""
    vagas.forEach(function(elemento, indice){
        textoFormatado += `Vaga N°${indice + 1}:\n${elemento.nome}: ${elemento.candidatos.length} Candidatos\n\n`
    })
    return textoFormatado
}

function confirmar (array, elemento, nome, descricao, dataLimite, funcaoRecursiva, metodo, textoOpcional = "") {
    if(confirm(`Confirma as informações ?\nVaga: ${nome}\nDescrição: ${descricao}\nData limite: ${dataLimite} ${textoOpcional}`)){
        metodo(array, elemento)
    } else {
        funcaoRecursiva()
    }
}

function metodoSplice(array, elemento) {
    return array.splice(elemento, 1)
}


function criarVaga() {0
    const vaga = {}
    vaga.nome = prompt("Digite o nome da vaga")
    vaga.descricao = prompt("Escreva uma breve descrição sobre a vaga")
    vaga.dataLimite = prompt("Digite uma data no formato dd/mm/aaaa")
    vaga.candidatos = []
    confirmar
    (
        vagas,
        vaga, 
        vaga.nome, 
        vaga.descricao, 
        vaga.dataLimite, 
        criarVaga,
        () => vagas.push(vaga)
    )
    
}

function visualizarVaga() {
    
    
    if(vagas.length === 0) {
        alert("Não existe nenhuma vaga disponível no momento...")
        return
    } 

    let i = parseInt(prompt(`Digite o indice da vaga que deseja visualizar:\n\n${listarVagas()}`) -1 )
    
    if(i >= 0 && i < vagas.length) {
        
        alert(`Vaga escolhida:\nNome da Vaga: ${vagas[i].nome}\nDescrição: ${vagas[i].descricao}\nData limite: ${vagas[i].dataLimite}\nCandidatos: ${vagas[i].candidatos}`)
        
    } else {
        alert("Esse indice não existe, tente outro")
        visualizarVaga()
    }
}

function inscreverCandidato() {
    let i = parseInt(prompt(`${listarVagas()}\nDigite o indice da vaga que deseja se inscrever`) -1 )
    const nomeCandidato = prompt("Digite seu nome")
    if(i >= 0 && i < vagas.length) {
        confirmar(
            vagas[i].candidatos,
            nomeCandidato , 
            vagas[i].nome, 
            vagas[i].descricao, 
            vagas[i].dataLimite, 
            inscreverCandidato, 
            () => vagas[i].candidatos.push(nomeCandidato),
            `\nNome do candidato: ${nomeCandidato}`)
    } else {
        alert("Esse indice não existe, tente outro")
        visualizarVaga()
    }
}

function excluirVaga() {

    if(vagas.length === 0) {
        alert("Não existe nenhuma vaga disponível no momento...")
        return
    } 

    let i = parseInt(prompt(`Digite o indice da vaga que deseja excluir:\n\n${listarVagas()}`) -1 )
    
    if (i >= 0 && i < vagas.length) {
        confirmar
        (
            vagas,
            vagas[i],
            vagas[i].nome,
            vagas[i].descricao,
            vagas[i].dataLimite, 
            excluirVaga, 
            () => metodoSplice(vagas,i),
            `\nCandidatos: ${vagas[i].candidatos}\nDeseja Realmente excluir ?`
        )
    
    } else {
        alert("Esse indice não existe, tente outro")
    }

}

function executarSistema() {
    let resposta 
    do {
        resposta = exibirMenu()
        switch(resposta) {
            case "1":
                alert(listarVagas())
                break
            case "2":
                criarVaga()
                break
            case "3":
                visualizarVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "0":
                alert("Saindo do sistema..")
                break
            default:
                alert("Digite uma entrada válida dentre as opções acima\n(Exemplo: 1, 2, 3, etc...)")
        }


    } while (resposta !== "0")
}


executarSistema()
// listarVagas()
// criarVaga()
// inscreverCandidato()
console.log(vagas)
// excluirVaga()
// console.log(vagas[0].candidatos)
// visualizarVaga()
// listarVagas()


let data = Date(2000, 1, 15)