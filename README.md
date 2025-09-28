# Pokedex de Kanto

Este projeto é uma Pokedex simples que exibe os 151 Pokémon da região de Kanto. Foi desenvolvido como um exercício para praticar o consumo de APIs com JavaScript e a manipulação dinâmica do DOM.

## Tecnologias Utilizadas

*   **HTML5:** Para a estrutura da página.
*   **CSS3:** Para a estilização e layout.
*   **JavaScript:** Para a lógica do aplicativo e manipulação do DOM.
*   **PokeAPI:** A API RESTful utilizada para obter os dados dos Pokémon.

## Aprendizados no Processo

O desenvolvimento deste projeto proporcionou uma valiosa experiência de aprendizado em várias áreas:

*   **Consumo de APIs:**
    *   Utilização do `fetch` para fazer requisições HTTP a um endpoint REST.
    *   Entendimento e manipulação de Promises para lidar com operações assíncronas. O uso de `.then()` para encadear operações e `Promise.all()` para aguardar a conclusão de múltiplas requisições foram fundamentais para buscar os detalhes de cada Pokémon.

*   **Manipulação do DOM:**
    *   Criação e inserção dinâmica de elementos HTML na página usando JavaScript. A lista de Pokémon é gerada a partir dos dados recebidos da API, transformando cada entrada em um item de lista (`<li>`) com suas respectivas informações e estilos.

*   **JavaScript Moderno (ES6+):**
    *   Uso de `arrow functions` para criar funções mais concisas.
    *   Utilização de `template literals` para facilitar a criação de strings HTML com variáveis.
    *   O método `.map()` foi essencial para transformar a lista de Pokémon e seus tipos em um novo formato de dados.

*   **Estrutura e Modularização:**
    *   O código JavaScript foi dividido em dois arquivos (`poke-api.js` e `main.js`) para separar as responsabilidades. Um arquivo é responsável pela comunicação com a API, e o outro pela manipulação da interface do usuário, tornando o código mais organizado e fácil de manter.

*   **Estilização com CSS:**
    *   Aplicação de estilos dinâmicos baseados nos dados recebidos (por exemplo, a cor de fundo de cada Pokémon é definida de acordo com sua espécie).
