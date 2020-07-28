# Challenge-Much

### Variáveis de ambiente
* Criar arquivo `.env` na raiz do projeto de acordo com o exemplo `.env.example`

### Rodar a aplicação
#### Apenas com npm
* `npm install` (instalar as dependências)
* `npm run start` (ira rodar na porta 80)

#### Com docker
* Fazer o build da imagem: `docker build -t challenge-much-api .`
* Rodar a imagem expondo a porta interna `80` na porta externa `80`: `docker run -it -p 80:80 -v $(pwd):/app challenge-much-api`
* *Caminhos considerando o diretório atual como raiz do projeto
* *Caso o sistema operacional não seja UNIX `$(pwd)` pode ser substituido pelo caminho completo até a raiz do projeto, exemplo: 
`docker run -it -p 80:80 -v C:\Projetos\challenge-much:/app challenge-much-api`

### Rodar os testes
* npm run test

### Examplo de requisição
```
Request: http://localhost/recipes/?i=onion,tomato,cheese,meat
Response: {
    "keywords": [
        "onion",
        "tomato",
        "cheese"
    ],
    "recipes": [
        {
            "title": "Easy Mexican Casserole Recipe",
            "ingredients": [
                "cheese",
                "cottage cheese",
                "ground beef",
                "tomato",
                "tortilla chips"
            ],
            "link": "http://www.grouprecipes.com/36010/easy-mexican-casserole.html",
            "gif": "https://media2.giphy.com/media/4wZkVNGkFbaWk/giphy.gif"
        },
        {
            "title": "Speedy Egg & Cheese Stack \r\n\r\n",
            "ingredients": [
                "cheese",
                "eggs",
                "flour tortillas",
                "tomato"
            ],
            "link": "http://www.kraftfoods.com/kf/recipes/speedy-egg-cheese-stack-91423.aspx",
            "gif": "https://media1.giphy.com/media/gL9ZUhyF2lKMZSEoAv/giphy.gif"
        },
        {...
```
