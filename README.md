# Clima Agora

## Descrição

O "Clima Agora" é um aplicativo web de clima construído com React e estilizado com Tailwind CSS. Ele permite que os usuários verifiquem as condições meteorológicas atuais de diversas cidades ao redor do mundo. O aplicativo utiliza a API OpenWeather para obter dados climáticos precisos e a API Flags Country para exibir as bandeiras correspondentes aos países das cidades.

## Funcionalidades

- **Pesquisa de Cidades:** Uma interface de pesquisa intuitiva permite aos usuários digitar o nome de uma cidade para buscar informações meteorológicas.
- **Sugestões de Cidades:** O aplicativo apresenta uma lista de cidades populares para acesso rápido às informações climáticas.
- **Visualização do Clima Atual:** Exibe informações detalhadas sobre a temperatura atual, sensação térmica, descrição do clima (ex: ensolarado, nublado), umidade, velocidade do vento e um ícone representativo da condição climática.
- **Bandeira do País:** Mostra a bandeira do país da cidade pesquisada, fornecida pela API Flags Country, enriquecendo a experiência visual.
- **Design Responsivo:** A interface é projetada para funcionar bem em diferentes tamanhos de tela, proporcionando uma boa experiência em desktops e dispositivos móveis.
- **Interface Moderna:** Utiliza Tailwind CSS para um design limpo, moderno e fácil de usar.

## Tecnologias Utilizadas

- **React:** Uma biblioteca JavaScript para construir interfaces de usuário dinâmicas e interativas.
- **Tailwind CSS:** Um framework CSS utilitário que permite estilizar rapidamente a interface com classes predefinidas.
- **OpenWeather API:** Uma API de dados climáticos que fornece informações meteorológicas em tempo real e previsões.
- **Flags Country API:** Uma API que fornece URLs de imagens de bandeiras de países com base no nome do país.
- **JavaScript:** A linguagem de programação principal para a lógica do aplicativo.
- **HTML:** A estrutura básica da página web.

## Como Executar

Para executar este aplicativo localmente, siga estas etapas:

1.  **Clone o Repositório:**
    ```bash
    git clone [coloque aqui o link do seu repositório]
    ```
2.  **Navegue até o Diretório:**
    ```bash
    cd [nome do diretório do aplicativo]
    ```
3.  **Instale as Dependências:**
    Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina. Execute o seguinte comando para instalar as dependências do projeto:
    ```bash
    npm install
    # ou
    yarn install
    ```
4.  **Obtenha uma Chave da API OpenWeather:**
    - Acesse o site da [OpenWeather](https://openweathermap.org/).
    - Crie uma conta ou faça login.
    - Navegue até a seção de API keys e gere uma nova chave de API.
5.  **Configure a Chave da API:**
    - Crie um arquivo `.env.local` na raiz do seu projeto (se ainda não existir).
    - Adicione sua chave da API OpenWeather neste arquivo, como no exemplo abaixo:
      ```
      REACT_APP_OPENWEATHER_API_KEY=sua_chave-da-api-aqui
      ```
      _(Certifique-se de que o prefixo `REACT_APP_` seja usado para que o React reconheça a variável de ambiente)\_
6.  **Execute o Aplicativo:**
    Execute o seguinte comando para iniciar o servidor de desenvolvimento do React:
    ```bash
    npm start
    # ou
    yarn start
    ```
7.  **Acesse o Aplicativo:**
    Abra seu navegador e acesse `http://localhost:3000` (ou a porta que for especificada no seu terminal).

## Uso

1.  Ao abrir o aplicativo, você verá uma interface com uma barra de pesquisa e sugestões de cidades.
2.  Digite o nome de uma cidade na barra de pesquisa e pressione Enter ou clique no ícone de pesquisa.
3.  Você também pode clicar em uma das sugestões de cidades para carregar as informações climáticas diretamente.
4.  O aplicativo exibirá as condições meteorológicas atuais da cidade pesquisada, incluindo temperatura, sensação térmica, descrição do clima, umidade, vento e a bandeira do país.

## Contribuição

Contribuições são bem-vindas! Se você tiver alguma sugestão de melhoria, correção de bugs ou novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Créditos

- Desenvolvido por [Diogo Henrique Rodrigues Dias Carrasco Carpio].
- Utiliza a API de clima da [OpenWeather](https://openweathermap.org/).
- Utiliza a API de bandeiras de países da [Flags Country](https://flagsapi.com/).
- Construído com a biblioteca [React](https://react.dev/).
- Estilizado com o framework [Tailwind CSS](https://tailwindcss.com/).
