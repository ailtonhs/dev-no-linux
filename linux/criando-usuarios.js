// ========================================================
// Gerenciamento de Usuários no Linux - Comandos via Script
// ========================================================

//-------------------------------
// Criação e exclusão de usuários
//-------------------------------

// Cria um usuário chamado "silva"
const comandoCriarUsuario = 'useradd silva';

// Exclui o usuário "silva" (forçado)
const ComandoExcluirUsuario = 'userdel -f silva';

// Cria o usuário "silva" com diretório home(-m) e comentário(-c)
const ComandoCriarUsuarioComHomeEComentario = 'useradd silva -m -c "Ailton Silva"';

// Define a senha para o usuário "silva"
const comandoDefinirSenhaUsuario = 'passwd silva';

// Altera o shell padrão do usuário para /bin/bash
const comandoAlteraShellUsuario = 'chsh -s /bin/bash silva';

// Exclui o usuário e também sua pasta pessoal (home)
const comandoExcluirUsuarioComHome = 'userdel -r -f silva';

// Cria o usuário com bash como shell padrão e diretório home
const comandoCriarUsuarioComBash = 'useredd silva -m -c "Ailton Silva" -s /bin/bash';


//---------------------------------
// Edição de informações de usuário
//---------------------------------

// Cria o usuário "guest" com data de expiração
const comandoCriarUsuarioComExpiracao = 'useredd guest -c "Convidado" -m -e 26/06/2022';

// Define senha para o usuário "guest"
const comandoDefinirSenhaGuest = 'passwd guest';

// Altera o shell do usuário "guest" para /bin/bash
const comandoAlterarShellGuest = 'usermod guest -s /bin/bash';

// Força a expiração da senha do usuário (obrigando troca no próximo login)
const comandoExpirarSenhaGuest = 'passwd guest -e';

// Consulta as informações de todos os usuários cadastrados
const comandoListarUsuarios = 'cat /etc/passwd';


//------------------------------------------
//Shell Script - Criando usuário em lote
//-------------------------------------------

// Cria um usuário com senha criptografada usando openssl
const comandoCriarUsuarioComSrnhaCriptografada = 'useradd convidado1 -c "Convidado especial" -s /bin/bash -m -p $(openssl passwd -crypt Senha123)';

// Cria um diretório chamado "/scripts" para armazenar scripts
const comandoCriarDiretorioScripts = 'mkdir /scripts';

// Cria um arquivo de script chamado "criar_user.sh"
const comandoCriarArquivoScript = 'nano criar_user.sh';

// Declara o início de um script shell
const comandoShebang = '#!/bin/bash';

// Comando dentro do script para criar o usuário "guest10"
const comandoAdicionarUsuarionoScript = 'useradd guest10 -c "Usuario convidado" -s /bin/bash -m -p $(openssl passwd -crypt Senha123)';

// Força a troca de senha no primeiro login do usuário "guest10"
const comandoForcaTrocaSenha = 'passwd guest10 -e';

// Exibe mensagem no terminal ao iniciar o script
const comandoMensagemInicio = 'echo "Criando usuário do sistema..."';

// Exibe mensagem no terminal ao finalizar o script
const comandoMensagemFim = 'echo "Finalizando!!"';

// Dá permissão de execução ao script
const comandoDarPermissaoExecusaoScript = 'chmod +x criar_user.sh';

// Executa o script de criação de usuário
const comandoExecutarScript = './criar_user.sh';

// Verifica se o usuário foi criado com sucesso
const comandoVericarUsuarioCriado = 'cat /etc/passwd';



//---------------------------------------------
// Adicionando usuário a grupos
//---------------------------------------------

// Lista todos os grupos existentes no sistema
const comandoListaGruposSistema = 'cat /etc/group';

// Adiciona o usuário "silva" aos grupos "adm" e "sudo".
// Obs: o uso de -G substitui os grupos secundários atuais.
const comandoAdicionarUsuarioAGrupos = 'usermod -G adm,sudo silva';


//--------------------------------------------------
// Criando e gerenciando grupos e usuários
//--------------------------------------------------

// Cria um novo grupo chamado GRP_ADM
const comandoCriarGrupoADM = 'groupadd GRP_ADM';

// Remove o grupo GRP_TESTE do sistema
const comandoExcluiGrupoTeste = 'groupdel GRP_TESTE';


// Cria o usuário "silva" com:
// - comentário "Ailton Silva"
// - diretório home
// - shell /in/bash
// - senha criptografada "senha123"
// - adiciona ao grupo GRP_ADM
const comandoCriarUsuarioComAGrupo = 'useradd silva -c "Ailton Silva" -m -s /bin/bash -p $(openssl passwd -crypt senha123) -G GRP_ADM';

// Transfere o usuário "mariana" para o grupo GRP_VEN
const comandoMoverUsuarioParaGrupoVEN = 'usermod -G GRP_VEN mariana';


// Remove o usuário "mariana" do grupo "sudo"
const comandoRetiraDeGrupoEspecifico = 'gpasswd -d mariana sudo';


//--------------------------------------------
// Conhecendo o sistema de permissões
//--------------------------------------------

// Lista os arquivos e diretórios com detalhes, incluindo permissões
const comandoParaVerificarPermisoesPastaHome = 'ls -l';

// Permissões de arquivos/diretórios:
// - "d" indica diretório
// - "-" indica arquivo
// - "r" = read (leitura)
// - "w" = write (gravação)
// - "x" = execute (execução)



// Altera o proprietário (dono) e o grupo do diretório /adm
// Exemplo: torna "debora" a dona e "GRP_ADM" o grupo
const ComandoMudarDonoEGrupo = 'chown debora:GRP_ADM /adm/';


//---------------------------------------------------
// Alterando as permissões de um diretório ou arquivo
//---------------------------------------------------

// Permissões numéricas (usadas com chmod):
// - leitura (r) = 4
// - gravação (w) = 2
// - execução (x) = 1
// Exemplo: 7 = r + w + x, 5 = r + x

// Define as permissões do diretório /adm como:
// dono: leitura + gravação + execução (7)
// grupo: leitura + execução (5)
// outros: nenhuma permissão (0)
const comandoAlteraPermissoesDiretorio = 'chmod 750 /adm';





