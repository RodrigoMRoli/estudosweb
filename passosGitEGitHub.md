## Configurações Básicas do Git
git config --global user.name "Seu nome"

git config --global user.email "Seu email"

git config --global core.editor xxxx
 
git config --list

## Comandos Linux
mkdir xxx
 >fazer uma pasta xxx no repositório criado
 
cd
 >é um comando de diretório do linux para navegar pelas pastas
 
ls
 >serve para listar arquivos

## Comandos git log
1. git log
 >traz o log inteiro do git

   -git log --decorate
   >mais detalhado
   
   -git log --author"John"
   >procura todas as modificações feitas pelo autor John
   
   -git log --graph 
   >faz um gráfico com branches, versões, merge, rebranch
   
git shortlog 
 >mostra de forma simples a quantidade de modificações, nome do autor e mensagens simplificado e em ordem alfabética

   -git shortlog -sn
   >mostra de forma mais simplificada ainda, só o nome e numero de commits

## Comandos git diff
git diff
 >mostra as modificações antes de dar commit

git diff --name-only
 >traz apenas o nome do arquivo modificado

## Comandos para desfazer coisas
git checkout nomedoarquivo
 >se você não adicionou no 'staged' nem deu commit, esse comando vai desfazer a modificação

git reset HEAD nomedoarquivo 
 >remove seu arquivo do 'staged' e traz para o 'modified' status

git reset --soft 
 >reseta na hash anterior com seu arquivo commitado pronto em 'staged'

git reset --mixed 
>reseta na hash anterior com seu arquivo commitado em 'modified'

git reset --hard 
 >reseta na hash anterior com tudo ignorado e deletado (não usar com mais pessoas no seu git, boas práticas)

## Comandos branch
git checkout -b xxxx 
 >você esta criando um branch chamado 'xxxx'
 
git branch 
 >vai te mostrar os branches existentes e em qual você esta modificando

git checkout xxxx 
 >você vai ir para o branch chamado 'xxxx'

git branch -D xxxx 
 >deleta o branch 'xxxx'

## Merge

Merge serve quando a sua branch e o master não estão com commits com versões alinhadas, ai é criado um commit extra para o alinhamento dos branches. O bom é que é um movimento não destrutivo do histórico de log, o ruim é que cria uma hash de commit nova sem para apenas esse alinhamento, deixando o log poluído

## Rebase
Assim como o merge ele tem a função de realocar o branch para a linha de produção principal, a diferença é que ao invés de fazer um commit extra para adicionar ao projeto de forma cronológicamente linear, ele vai criar um novo commit como se estivesse no projeto raíz e no topo do log, sem nenhum detalhe à mais para atrapalhe na leitura do log no futuro.

###### Boas práticas entre Merge x Rebase

Sempre priorizar a utilização do Rebase por conta dessa limpeza do log do git, na utilização desnecessária do merge e com commits extras e novas linhas de branches no log, acaba ficando muito poluído e confuso para a leitura. Então uma boa prática é sempre utilizar o rebase e quando for adicionar uma nova feature ou algo maior utilizar o merge.