const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const TituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');
// acima ele pega as informações do id que foi mencionado acima^

const verdeCipreste = {
    nome:'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
    nome:'Azul-inverno',
    pasta:'imagens-azul-inerno'
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
let tamanhoSelecionado=1; 
let corSelecioanda=1;


// abaixo a função de troca de imagens 
function trocarImagem(){
//    reumindo a linha abaixo eu criei uma variavekl comum chamada  idOpcaoSelecionada 
//e dei uma document.queryselector para conseguir puxar o id do elemento com name name="opcao-imagem  que esteja cheked no html( ou seja a variavel vai guardar o id)
    const idOpcaoSelecionada =document.querySelector('[name="opcao-imagem"]:checked').id;
    //charAt serve pra ele pegar o priemiro caracter =(0)  
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-'+ imagemSelecionada +'.jpeg';
};


function trocarTamanho(){
   //mudar o tamanho da imagem
   //mudar titulo do produto  
   // lembrando que pode repetir variavel pq ela não é global 
   const idOpcaoSelecionada =document.querySelector('[name="opcao-tamanho"]:checked').id;
   tamanhoSelecionado= idOpcaoSelecionada.charAt(0);
   TituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecioanda].nome + " para caixa de  " + opcoesTamanho[tamanhoSelecionado];
   //iner text parecido com o inner html mas no caso só vai alterar o texto
    //abaixo eu manipulo o css e joga os estilos la do css chamado caixa pequena na imagem de vizualização
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm')
    imagemVisualizacao.classList.add('caixa-pequena');
    else{
    imagemVisualizacao.classList.remove('caixa-pequena');
    }
};


function trocarCor(){

    const idOpcaoSelecionada=document.querySelector('[name="opcao-cor"]:checked').id
    corSelecioanda= idOpcaoSelecionada.charAt(0);
    // trocar titulo da pagina aqui preenche o texto
    TituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecioanda].nome + " para caixa de  " + opcoesTamanho[tamanhoSelecionado];
    //trocar nome da cor
   nomeCor.innerText =' Cor - ' +  opcoesCores[corSelecioanda].nome;
    //trocar as minuaturas
  miniaturaImagem0.src ='./imagens/opcoes-cores/' + opcoesCores[corSelecioanda].pasta +'/imagem-0.jpeg';
  miniaturaImagem1.src ='./imagens/opcoes-cores/' + opcoesCores[corSelecioanda].pasta +'/imagem-1.jpeg';
  miniaturaImagem2.src ='./imagens/opcoes-cores/' + opcoesCores[corSelecioanda].pasta +'/imagem-2.jpeg';
    //trocar imagem exibida
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecioanda].pasta + '/imagem-' +imagemSelecionada + '.jpeg'

} 

