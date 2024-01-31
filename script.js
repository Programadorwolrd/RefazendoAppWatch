const imagemVisualizacao = document.getElementById('imagem-visualizacao');
// acima ele pega as informações do id que foi mencionado acima^

const verdeCipreste = {
    nome:'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
    nome:'Azul-inverno',
    pasta: 'imagens-azul-inerno'
};

const meiaNoite = {
    nome:'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = {
    nome:'Estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = {
    nome:'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};




// usando array para manipular as variaveis acimas 
// ja na opções como ela nao guarda mais de uma informação e passada em array simples diferente do priemrio
const opcoesCores =[verdeCipreste,azulInverno ,meiaNoite,estelar,rosaClaro]
const opcoesTamanho =['41 mm', '45mm']

let imagemSelecionada=1; 


// abaixo a função de troca de imagens 
function trocarImagem(){
//    reumindo a linha abaixo eu criei uma variavekl comum chamada  idOpcaoSelecionada 
//e dei uma document.queryselector para conseguir puxar o id do elemento com name name="opcao-imagem  que esteja cheked no html( ou seja a variavel vai guardar o id)
    const idOpcaoSelecionada =document.querySelector('[name="opcao-imagem"]:checked').id;
    //charAt serve pra ele pegar o priemiro caracter =(0)  
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-'+ imagemSelecionada +'.jpeg';
}


function 

