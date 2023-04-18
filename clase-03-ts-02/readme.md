# AULA TypeScript 2
-aliases
-union types
-Intersection types
- tipos deduzidos
-enums 
 PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
(clase mudado para nickname usei equivalencia como keyAdmin-keyManager)

PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

EXERCÍCIO DE FIXAÇÃO 1
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.

EXERCÍCIO DE FIXAÇÃO 2
Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui um 
autor e um texto. Abaixo, temos um exemplo de array de posts em JS!

Tendo isso em mente, faça o que se pede:

1. Crie um type para representar um post;
2. Utilize o tipo criado acima para fazer a tipagem do array posts;
3. Analise a função buscarPostsPorAutor, escrita em JS:
  a. Quais são as entradas e saídas dessa função? 
  b. Faça a tipagem da função.
