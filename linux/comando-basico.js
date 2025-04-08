//Navegando pelo sistema - Comando básicos Linux em formato JS

// ============================
// 🚀 ACESSO REMOTO
// ============================
// Instalação do servidor SSH para acesso remoto
const recursoAcessoRemoto = 'sudo apt-get install openssh-server';

// Acesso de um Linux para outro via SSH
const acessoRemoto = 'ssh usuario@192.168.0.108';


// ============================
// 🔧 COMANDOS ÚTEIS
// ============================

const exibirDataHora = 'date'; // Mostra data e hora

const criar = 'mkdir'; // Cria um novo diretório

const criarArquivo = 'touch'; // Cria arquivo

const excluirPasta = 'rmdir'; // Exclui diretório

const excluirArquivo = 'rm'; // Exclui arquivo

const limpaTerminal = 'clear'; // Limpa a tela


const caminhoAtual = 'pwd';  // Mostra onde estou no sistema

const forcarExclusao = 'rm -rf Planilhas'; //Força a exclusão de arquivos e diretório (mesmo se não estiverem vazios)


// ============================
// 📂 NAVEGAÇÃO ENTRE DIRETÓRIOS
// ============================

const raiz = 'cd /';  // Vai para o diretório raiz


const voltar = 'cd ..';   // Volta um diretório


const listar = 'ls';  // Lista arquivos e diretórios


const entraDiretorio = 'cd nome-de-diretório'; // Entra no diretório indicado


const voltaEEntrar = 'cd ../storage';  // Volta um e entra em outro


const caminhoDireto = 'cd storage/Documentos';  // Caminho direto até o destino

// Atalho com TAB (comentário explicativo)

const dicaTab = 'cd storage/'; // Depois de digitar isso, pressione TAB 2x para ver o que há dentro


// ============================
// ✅ FUNÇÃO PARA EXIBIR
// ============================
const mostrarComando = (comando, descricao) => {
    return `${comando}: \n→ ${descricao}\n`;
}

// ============================
// 📤 EXIBINDO OS COMANDOS
// ============================
console.log(mostrarComando(forcarExclusao, 'Força a exclusão de arquivos e diretório (mesmo se não estiverem vazios)'));
console.log(mostrarComando(recursoAcessoRemoto, 'Instala o servidor SSH'));
console.log(mostrarComando(acessoRemoto, 'Acesso de Linux para outro via SSH'));
console.log(mostrarComando(exibirDataHora, 'Mostra data e hora'));
console.log(mostrarComando(criar, 'Criar um novo diretório'));
console.log(mostrarComando(criarArquivo, 'Cria arquivo'));
console.log(mostrarComando(excluirPasta, 'Exclui pasta'));
console.log(mostrarComando(excluirArquivo, 'Exclui arquivo'));
console.log(mostrarComando(limpaTerminal, 'Limpa o terminal'));
console.log(mostrarComando(caminhoAtual, 'Mostra onde estou no sistema'));
console.log(mostrarComando(raiz, 'Vai para o diretório raiz'));
console.log(mostrarComando(voltar, 'Volta um diretório'));
console.log(mostrarComando(listar, 'Lista arquivos e diretórios'));
console.log(mostrarComando(entraDiretorio, 'Entra no diretório indicado'));
console.log(mostrarComando(voltaEEntrar, 'Volta um e entra em outro diretório'));
console.log(mostrarComando(caminhoDireto, 'Acessa o caminho completo até um diretório'));
console.log(mostrarComando(dicaTab, 'Pressione TAB 2x para mostrar conteúdo do diretório'));





