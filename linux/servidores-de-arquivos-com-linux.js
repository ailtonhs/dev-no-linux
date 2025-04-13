//Servidores de Arquivos com Linux

//----------------------------------------
//Introdução ao servidor de arquivos
//----------------------------------------



//-------------------------------------------
//Instalação do SAMBA e configuração inicial
//--------------------------------------------

const comandoInstalarSamba = 'apt install samba -y';

const comandoParaCriarPastaNoDisco2 = 'mkdir publica';

const comandoParaDaPermissaoTotal = 'chmod 777 publica/';

const comandoParaLiberarPastaParaRede = 'nano /etc/samba/smb.conf';

//Edição no smb.conf

//[publica] -> nome de compatilhamento
//path = /disk2/publica -> indicar o caminho
//writable = yes -> pasta liberada para gravação
//guest ok = yes -> qualquer pessoa pode acessala
//guest only = yes -> diz que toda pessoa é convidado

const comandoParaReiniciarSamba = 'systemctl restart smbd';

const comandoParaVerificarseEstaFuncionado = 'systemctl status smbd';

const comandoParaAtivarOSambaAutomatico = 'systemctl enable smbd';


//------------------------------------------------------------
//Configurando o acesso via máquina cliente
//----------------------------------------------------------

//Caminho de rede Windows
//Abrir o explorador de Arquivo e digira na aba \\192.168.122\publica e enter, vai abrir uma janela de credenciais para usuaário cadastrado


//facilitando para usuario no windows
//caminho de rede
//-> este computador -> mostrar mais opções -> mapear unidade de rede -> irá abir uma janela onde você deve colcar uma letra e o caminho da pasta -> \\192.168.122.252\publica

