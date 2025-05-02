// Servidor de Banco de Dados com Linux

//------------------------------------------------
// O que é um servidor de banco de dados
//------------------------------------------------
// Um servidor de banco de dados é um sistema usado para armazenar, gerenciar e acessar informações.
// Ele permite que múltiplos usuários consultem, insiram e modifiquem dados de forma eficiente e segura.


//-------------------------------------------------
// Instalando o MySQL
//-------------------------------------------------

// Comando para instalar o MySQL Server 8.0 no Linux
const instalarMySQL = 'apt install mysql-server-8.0 -y';

// Comando para acessar o MySQL usando o usuário root
const acessarMySQL = 'mysql -u root -p';

// Comando para listar todos os bancos de dados disponíveis no servidor
const listarBancosDeDados = 'show databases;';

// Comando para criar um novo banco de dados chamado "meubanco"
const criarBancoDeDados = 'create database meubanco;';

// Comando para selecionar e usar o banco de dados "meubanco"
const usarBancoDeDados = 'use meubanco;';

// Comando para criar uma tabela chamada "Pessoas" com várias colunas
const criarTabelaPessoas = 'create table Pessoas (PessoaID int, Nome varchar(50), Sobrenome varchar(50), Endereco varchar(100), Cidade varchar(50));';

// Comando para verificar se a tabela foi criada com sucesso
const listarTabelas = 'show tables;';

// Comando para visualizar todos os registros da tabela "Pessoas"
const consultarTabelaPessoas = 'select * FROM Pessoas;';

// Comando para inserir dados na tabela "Pessoas"
// (Corrigido: 'intro' para 'into' e campos correspondentes aos valores)
const inserirDadosPessoas = "insert into Pessoas (PessoaID, Nome, Sobrenome, Endereco, Cidade) VALUES (1, 'Carlos', 'da Silva', 'Av. do Carmo, 500', 'Jaboticabal-SP');";

// Comando para sair do MySQL
const sairMySQL = 'exit';
