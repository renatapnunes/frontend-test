# Projeto: Studio Ghibli
👋 Bem-vinda(o) ao meu projeto! 

_Projeto desenvolvido para o Desafio Técnico do processo seletivo da Clubbi

➡️ Acesse à aplicação por este link: [Projeto Studio Ghibli](https://studio-ghibli-project-renatapnunes.vercel.app/)

### ➤ Contexto
Este projeto consiste em uma aplicação front-end que exibe informações sobre os filmes produzidos pelo Studio Ghibli, um estúdio de cinema de animação japonês. O usuário pode visualizar a lista completa de filmes, buscar pelo seu nome ou ainda pesquisar por personagens e locais presentes nas animações.

As informações exibidas são consumidas da seguinte API (*Application Programming Interface*) gratuita:
[API Studio Ghibli](https://ghibliapi.herokuapp.com/)

---
### ➤ Instalação
Pré-requisitos:

 - Ter instalado em sua máquina o NPM
 
 No terminal da sua máquina digite a seguinte sequência de comandos:

     git clone git@github.com:renatapnunes/frontend-test.git
     cd frontend-test
     npm install
     npm run dev
Caso a aplicação não abra sozinha, você pode acessar no seu browser `http://localhost:3000/`

---
### ➤ Aplicação

![Aplicação](https://github.com/renatapnunes/frontend-test/blob/main/frontend-test/src/assets/app.gif)

Na página principal da aplicação, que pode ser acessada pela rota '/', são listados cards de todos os filmes, incluindo seu título, nota, tempo de duração e ano de lançamento. Caso queira, o usuário pode ordenar os filmes com base nessas informações, como por exemplo, pelos mais recentes ou com maior nota.
Há ainda nesta página, uma barra de busca, onde o usuário pode selecionar uma categoria entre as opções *Movie*, *Character* ou *Location* e em seguida digitar o que deseja pesquisar. A pesquisa pode ser feita pelo nome completo, ou por parte dele, em letras maiúsculas ou minúsculas. Ao clicar no botão de busca, o usuário é redirecionado para a página *Search*.

Na página *Search*, cuja rota é "/search", uma lista com os resultados encontrados é exibida. Os cards são personalizados conforme a categoria pesquisada. Caso deseje, o usuário pode, nesta mesma página, realizar uma nova pesquisa, pois a barra de busca também é exibida nesta rota.

Independente da página, sempre que um card de filme for exibido na tela, o usuário pode clicar nele para visualizar mais detalhes sobre. Para isso, é feito um redirecionamento para a página de *Details*, na rota "/details", onde é possível visualizar a descrição do filme, além de quem dirigiu e produziu a animação.

<img src="https://github.com/renatapnunes/frontend-test/blob/main/frontend-test/src/assets/details-page.png" alt="details page" width="800"/>

Para complementar a aplicação, todas as páginas possuem um header com uma barra de navegação e também um footer. Foi criada também, uma página About, acessada pela rota "/about" que conta um pouco mais sobre o Studio Ghibli. E por fim, caso o usuário tente acessar uma rota inexistente, uma página "Not Found" será exibida.

Toda à aplicação é responsiva.

<img src="https://github.com/renatapnunes/frontend-test/blob/main/frontend-test/src/assets/home-responsive.png" alt="home" width="200"/> <img src="https://github.com/renatapnunes/frontend-test/blob/main/frontend-test/src/assets/search-responsive.png" alt="search" width="200"/> <img src="https://github.com/renatapnunes/frontend-test/blob/main/frontend-test/src/assets/about-responsive.png" alt="about" width="200"/>

---
### ➤ Tech stacks e dependências
- Linguagem: **TypeScript**
- Biblioteca: **React.js**
- Gerenciador de estados: **Redux Toolkit**
- Estilização: **Styled Components**

Além disso:

- **vite.js**: codigo-fonte em ESM nativo;
- **react router dom**: gerenciamento de rotas;
- **react-query**: gerenciamento de chamadas na API;
-   **esLint**: detecção de problemas e padronização de estilo;
- **prettier**: formatação do código;

Template Vite.js utilizado: [react-ts-vite-template](https://curriculum-manager.vercel.app/home)

---
### ➤ Testes
- Unitários: **Jest e React Testing Library**
- E2E (*End to End*): **Cypress**

Comando para testes unitários:

    npm run test:unit

Comando para testes E2E:

    npm run test:e2e

Comando para cobertura dos testes unitários:

    npm run test:unit:coverage

<img src="https://github.com/renatapnunes/frontend-test/blob/main/frontend-test/src/assets/test-coverage.png" alt="test coverage" width="800"/>

---
### ➤ Meus contatos
👉 [Linkedin](https://www.linkedin.com/in/renata-p-nunes/)

Estou aberta a feedbacks sobre este projeto.
Vou ficar muito feliz em aprender algo novo! 😄
