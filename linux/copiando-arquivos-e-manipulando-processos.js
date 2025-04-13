//==================================================
// Copiando Arquivos e Manipulando Processos no Linux
//==================================================

//--------------------------------
// Copiando arquivos
//--------------------------------

// Copia o arquivo "bancodedados.mdf" da pasta /home/silva para /disk2/
// Obs: Você está fora da pasta onde está o arquivo
const comandoCopiarBancoDeDadosParaDisk2 = 'cp /home/silva/bancodedados.mdf /disk2/';

// Copia todos os arquivos .txt da pasta /home/silva para /disk2/
// Obs: Você está fora da pasta onde estão os arquivos
const comandoCopiarArquivosTxtParaDisk2 = 'cp /home/silva/*.txt /disk2/';

// Copia todos os arquivos que começam com "a" da pasta atual para /disk2/
// Obs: Você está dentro da pasta onde estão os arquivos
const comandoCopiarArquivosComPrefixoA = 'cp ./a* /disk2/';

// Copia todos os arquivos da pasta /home/silva para /disk2, perguntando antes de sobrescrever
// -i: interativo — pergunta antes de sobrescrever
const comandoCopiarComConfirmacao = 'cp /home/silva/* /disk2/ -i';

// Copia recursivamente todos os arquivos e pastas (inclusive imagens) de /home/silva para /disk2
// -r: recursivo — copia diretórios e seus conteúdos
const comandoCopiarTudoRecursivo = 'cp /home/silva/* /disk2/ -r';

// Copia recursivamente todos os arquivos de /home/silva para /disk2 com saída verbosa
// -v: verboso — mostra os arquivos sendo copiados
const comandoCopiarComLog = 'cp /home/silva/* /disk2/ -r -v';

//--------------------------------------------------------
// Renomeando e Movendo Arquivos
//--------------------------------------------------------

// Move o arquivo planilhas.xlsx para /disk2
const comandoMoverPlanilhaParaDisk2 = 'mv /home/silva/planilhas.xlsx /disk2';

// Move todos os arquivos da pasta /home/silva para /disk2 com confirmação e modo verboso
// -i: interativo — pergunta antes de sobrescrever
// -v: verboso — mostra o que está sendo feito
const comandoMoverComConfirmacaoELog = 'mv /home/silva/* /disk2/ -i -v';

// Renomeia o arquivo de "bancodedados.mdf" para "banco_de_dados.mdf"
const comandoRenomearBancoDeDados = 'mv bancodedados.mdf banco_de_dados.mdf';

//-----------------------------------------------------------
// Processos: Iniciando, Visualizando e Encerrando
//-----------------------------------------------------------

// Mostra todos os processos ativos do sistema
// ps: exibe os processos em execução
// aux: mostra todos os processos de todos os usuários com informações detalhadas
const comandoListarTodosProcessos = 'ps aux';

// Encerra um processo pelo número do PID (número do processo)
// Exemplo: kill 2230 (mata o processo com PID 2230)
const comandoMatarProcessoPorPID = 'kill 2230';

// Encerra todos os processos com o nome especificado (ex: chrome)
const comandoMatarProcessosPorNome = 'killall chrome';

// Mostra quem está logado no sistema e o que estão fazendo
const comandoUsuariosLogados = 'w';

// Mostra detalhes de login dos usuários, incluindo data, hora e TTY
const comandoVerLoginsUsuarios = 'who -a';

// Encerra o processo de um usuário no servidor (ex: PID 2311)
const comandoEncerrarProcessoDeUsuario = 'kill 2311';
