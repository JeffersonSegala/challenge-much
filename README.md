# Challenge-Much

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