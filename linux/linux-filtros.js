// 🎯 Filtrando a exibição de arquivos no terminal Linux


// 📜 Exibe a listagem de arquivos com navegação por página (setas para baixo apenas)
const listagemComMore = 'ls | more';

// 📜 Exibe a listagem de arquivos com navegação completa (setas para cima/baixo, pgUp/pgDn)
const listagemComLess = 'ls | less'

// 🔍 Lista arquivos que começam com a letra "p" (qualquer coisa depois)
const arquivosQueComecamComP = 'ls p*';

// 🔍 Lista arquivos que começam com "m", têm qualquer letra no meio, depois um "g" e o restante pode ser qualquer coisa
// Ex: "meg.txt", "m9g_report.csv"
const arquivosComPadraoMQualquerG = 'ls m?g*';

// 📁 Entra no diretório do usuário (atalho para /home/seu-usuario)
const irParaDiretorioDoUsuario = 'cd ~'

// 📂 Supondo arquivos como arquivo1.txt até arquivo5.txt
// Lista apenas arquivos de 1 ao 3
const arquivoDe1a3 = 'ls arquivo[1-3]*';

// 📂 Lista apenas arquivos que terminam com 2 ou 4
const arquivos2e4 = 'ls arquivo[2,4]*';

// 🚫 Lista todos os arquivos, exceto os que terminam com 2 ou 5
const arquivosExceto2e5 = 'ls arquivo[^2,5]*';

// 🚫 Lista todos os arquivos, exceto os que terminam com 3, 4 ou 5
const arquivosExceto3a5 = 'ls arquivo[^3-5]*';

const conceito = (entrada) => {
    let mensagem = '';
    if (entrada === listagemComMore) {
        mensagem = `📜 Exibe a listagem de arquivos com navegação por página (setas para baixo apenas)`;

    } else if (entrada === listagemComLess) {
        mensagem = `📜 Exibe a listagem de arquivos com navegação completa (setas para cima/baixo, pgUp/pgDn)`;

    } else if (entrada === arquivosQueComecamComP) {
        mensagem = `🔍 Lista arquivos que começam com a letra "p" (qualquer coisa depois)`;

    } else if (entrada === arquivosComPadraoMQualquerG) {
        mensagem = `🔍 Lista arquivos que começam com "m", têm qualquer letra no meio, depois um "g" e o restante pode ser qualquer coisa\nEx: "meg.txt", "m9g_report.csv\n`;

    } else if (entrada === irParaDiretorioDoUsuario) {
        mensagem = `📁 Entra no diretório do usuário (atalho para /home/seu-usuario)`;

    } else if (entrada === arquivoDe1a3) {
        mensagem = `📂 Supondo arquivos como arquivo1.txt até arquivo5.txt\nLista apenas arquivos de 1 ao 3\n`;

    } else if (entrada === arquivos2e4) {
        mensagem = `📂 Lista apenas arquivos que terminam com 2 ou 4`;

    } else if (entrada === arquivosExceto2e5) {
        mensagem = `🚫 Lista todos os arquivos, exceto os que terminam com 2 ou 5`;

    } else if (entrada === arquivosExceto3a5) {
        mensagem = `🚫 Lista todos os arquivos, exceto os que terminam com 3, 4 ou 5`;

    } else {
        mensagem = `🚫 [ERRO]! comando inválido ou não reconhecido`;
    }

    return mensagem;
}

console.log(conceito('ls | more'));
console.log(conceito('ls | less'));
console.log(conceito('ls p*'));
console.log(conceito('ls m?g*'));
console.log(conceito('cd ~'));
console.log(conceito('ls arquivo[1-3]*'));
console.log(conceito('ls arquivo[2,4]*'));
console.log(conceito('ls arquivo[^2,5]*'));
console.log(conceito('ls arquivo[^3-5]*'));










