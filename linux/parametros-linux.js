// Lista informações detalhadas sobre arquivos e diretórios
// -l: formato de listagem longa (mostra permissões, proprietário, tamanho, etc.)
const comandoListagemLonga = 'ls -l'


// Identificando tipos de arquivos na listagem longa:
// d → diretório
// - → arquivo comum
// l → link simbólico
// O número após o tipo representa quantos "hard links" o item possui
// "root" indica o proprietário e grupo
// O número antes da data representa o tamanho (em bytes)


// Lista todos os arquivos, inclusive os ocultos (que começam com ponto)
const comandoListarArquivosocultos = 'ls -a';

// Exibe tamanhos de arquivos em formato legível (KB, MB, etc.)
const comandoTamanhoHumano = 'ls -lh';

// Combina listagem longa, arquivos ocultos e tamanhos legíveis
const comandoListagemCompleta = 'ls -lah';

// Remove arquivos ou diretórios forçando a exclusão e exibindo o que está sendo feito
// -r: recursivo (necessário para diretórios)
// -f: força a exclusão sem pedir confirmação
// -v: modo verboso (mostra o que está sendo excluído)
const comandoRemoverForcadoVerboso = 'rm -rfv';

// Igual ao anterior, mas adiciona o -i para perguntar antes de excluir cada item
const comandoRemoverForcadoInterativo = 'rm -rfvi'

// Exibe o manual de ajuda para um comando (nesse caso, o 'ls')
const comandoAjudaLS = 'man ls'