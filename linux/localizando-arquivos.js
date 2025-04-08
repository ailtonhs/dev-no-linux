// Comandos para localizar arquivos e diretórios no sistema


// Lista os arquivos e diretórios dentro da pasta /sys
const listarSys = 'ls /sys';

// Lista os arquivos e diretórios dentro da pasta /sys/kernel
const listarKernel = 'ls /sys/kernel';

// Lista os arquivos e diretórios dentro de /sys/kernel que começam com a letra "p"
const listarKernelComP = 'ls /sys/kernel/p*';

// Busca arquivos cujo nome começa com "arq", sem precisar saber o caminho completo
const buscarPorPrefixo = 'find -name arq*';

//// Busca arquivos chamados "passwd*" a partir da raiz do sistema (/)
const BuscarPasswdDesdeRaiz = 'find / -name passwd*';


const conceito = (entrada) => {
    let mensagem = '';
    if (entrada === listarSys) {
        mensagem = `Lista os arquivos e diretórios dentro da pasta /sys`;

    } else if (entrada === listarKernel) {
        mensagem = `Lista os arquivos e diretórios dentro da pasta /sys/kernel`;

    } else if (entrada === listarKernelComP) {
        mensagem = `Lista os arquivos e diretório dentro de /sys/kernel que começam com a letra p`;

    } else if (entrada === buscarPorPrefixo) {
        mensagem = 'Busca arquivo cujo nome começa com \"arq\", sem precisar ser o caminho completo';

    } else if (entrada === BuscarPasswdDesdeRaiz) {
        mensagem = `Busca arquivos chamados \"passwd*\" a partir da raiz do sistema (/)`;
    } else {
        mensagem = '[ERRO]! comando errado ou não cadastrado no sistema';
    }

    return mensagem;

}

console.log(conceito('ls /sys'));
console.log(conceito('ls /sys/kernel'));
console.log(conceito('ls /sys/kernel/p*'));
console.log(conceito('find -name arq*'));
console.log(conceito('find / -name passwd*'));






