Configurações Básicas do Git
git config --global user.name "Seu nome"
git config --global user.email "Seu email"
git config --global core.editor xxxx  // no caso ja foi instalado o VScode na instalação
git config --list // vai aparecer as diversas opções de config de usuário (ignore)

Comandos
mkdir xxxxxxxx // fazer uma pasta no repositório criado
cd //é um comando de diretório do linux para navegar pelas pastas
ls //serve para listar arquivos

Comandos git log
git log // traz o log inteiro do git
git log --decorate // mais detalhado
git log --author"xxx" // procura todas as modificações feitas pelo autor xxx
git shortlog //mostra de forma simples a quantidade de modificações, nome do autor e mensagens simplificado e em ordem alfabética
git shortlog -sn // mostra de forma mais simplificada ainda, só o nome e numero de commits
git log --graph // faz um gráfico com branches, versões, merge, rebranch
