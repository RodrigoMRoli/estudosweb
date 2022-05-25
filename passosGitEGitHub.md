## Configurações Básicas do Git
git config --global user.name "Seu nome"
git config --global user.email "Seu email"
git config --global core.editor xxxx
 >no caso ja foi instalado o VScode na instalação
git config --list
 >vai aparecer as diversas opções de config de usuário (ignore)

## Comandos Linux
mkdir xxxxxxxx
 >fazer uma pasta no repositório criado
cd
 >é um comando de diretório do linux para navegar pelas pastas
ls
 >serve para listar arquivos

## Comandos git log
1. git log // traz o log inteiro do git
   -git log --decorate 
    >mais detalhado
   -git log --author"xxx" 
    >procura todas as modificações feitas pelo autor xxx
   -git log --graph 
   >faz um gráfico com branches, versões, merge, rebranch
2. git shortlog 
 >mostra de forma simples a quantidade de modificações, nome do autor e mensagens simplificado e em ordem alfabética
   -git shortlog -sn
   >mostra de forma mais simplificada ainda, só o nome e numero de commits

## Comandos git diff
git diff //mostra as modificações antes de dar commit
git diff --name-only //traz apenas o nome do arquivo modificado

## Comandos para desfazer coisas
git checkout nomedoarquivo // se você não adicionou no 'staged' nem deu commit, esse comando vai desfazer a modificação
git reset HEAD nomedoarquivo // remove seu arquivo do 'staged' e traz para o 'modified' status
git reset --soft //reseta na hash anterior com seu arquivo commitado pronto em 'staged'
git reset --mixed //reseta na hash anterior com seu arquivo commitado em 'modified'
git reset --hard //reseta na hash anterior com tudo ignorado e deletado (não usar com mais pessoas no seu git, boas práticas)

## Comandos branch
git checkout -b xxxx // você esta criando um branch chamado 'xxxx'
git branch // vai te mostrar os branches existentes e em qual você esta modificando
git checkout xxxx // você vai ir para o branch chamado 'xxxx'
git branch -D xxxx // deleta o branch 'xxxx'

## Comandos Merge

> merge serve quando a sua branch e o master não estão com commits com versões alinhadas, ai é criado um commit extra para o alinhamento dos branches. O bom é que é um movimento não destrutivo do histórico de log, o ruim é que cria uma hash de commit nova sem para apenas esse alinhamento, deixando o log poluído

