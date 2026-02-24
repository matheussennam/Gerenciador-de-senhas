## Gerenciador de Senhas (Simples)

Um gerenciador de senhas leve feito em HTML, CSS e JavaScript puro. Ele permite cadastrar, buscar, copiar e apagar senhas direto no navegador, salvando tudo no `localStorage`.

## Funcionalidades
- Adicionar site, usuario/email e senha
- Gerar senha forte automaticamente
- Buscar por nome do site
- Mostrar/ocultar senha
- Copiar senha para a area de transferencia
- Excluir senhas salvas

## Como usar
1) Abra o arquivo [index.html](index.html) no navegador.
2) Preencha os campos e clique em "Salvar".
3) Use a busca para filtrar por site.
4) Use os botoes para copiar, mostrar ou deletar.

## Onde os dados ficam salvos
As senhas ficam armazenadas apenas no seu navegador (em `localStorage`). Isso significa:
- Nao vai para nenhum servidor
- So aparece neste navegador e neste computador
- Se limpar o cache/armazenamento, perde os dados

## Aviso de seguranca
Este projeto e educativo e nao criptografa as senhas. Nao use para armazenar dados sensiveis em ambientes reais.

## Estrutura do projeto
- [index.html](index.html)
- [style.css](style.css)
- [script.js](script.js)
