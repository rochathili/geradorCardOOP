// Array de objetos representando os cards
const cards = [
    {
        titulo: 'Patches, o Santo',
        descricao: "    Patches, o Iena, é um personagem recorrente na série Souls. Ele é conhecido por sua natureza traiçoeira e por enganar os jogadores em várias situações. Patches aparece em jogos como Demon's Souls, Dark Souls e Bloodborne, sempre com o objetivo de causar problemas aos jogadores.",
        imagem: 'https://preview.redd.it/2qdcef7it9z51.jpg?width=640&crop=smart&auto=webp&s=b46ea5333683577bf2585e129371aeb659ef3c69'
    },
    {
        titulo: 'Yuria, a bruxa',
        descricao: "Yuria, A bruxa, é uma personagem enigmática que aparece em Demon's Souls. Ela é conhecida por sua habilidade em magia e por sua conexão com o mundo espiritual. Yura desempenha um papel importante na história do jogo, ajudando os jogadores a entenderem mais sobre o universo sombrio de Demon's Souls.",
        imagem: 'https://demonssouls.wdfiles.com/local--files/yuria/Yuria%202.png   '
    },
    {
        titulo: 'Dama de preto',
        descricao: "A Dama de Preto é uma personagem misteriosa que aparece em Demons Souls. Ela é conhecida por sua aparência sombria e por seu papel como guia espiritual para os jogadores. A Dama de Preto ajuda os jogadores a entenderem mais sobre o mundo de Demon's Souls e suas complexidades.",
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mhWENgHNAxIBkr0iEdF74K_CuSk7kVeeuA&s'
    }
];

// Para gerar um objeto basta abrir chaves { } e colocar os atributos dentro, separados por vírgulas. Ex.: nome = "Thiago José Silva", idade = 39, cidade = "São Paulo".

// Função para exibir os cards no HTML
function exibirCards() {


    const cardContainer = document.querySelector('#cardContainer');


    cards.forEach(card => {
        const cardElement = document.createElement('div');
        // Adiciona a classe 'card' para estilização

        cardElement.classList.add('card');
        // Define o conteúdo HTML do card com os dados do objeto

        cardElement.innerHTML = 
        `
        <img src= "${card.imagem}" alt="${card.titulo}">
        <h2>${card.titulo}</h2>
        <p>${card.descricao}</p>
      `;
       // Adiciona o card ao container de cards

        cardContainer.appendChild(cardElement);
       // Adiciona um evento de clique para exibir o card em um modal
    });
}

// Exibir os cards ao carregar a página
exibirCards();