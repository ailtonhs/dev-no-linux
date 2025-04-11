// Gerenciamento de pacotes no Linux

//-----------------------------------------
// Gerenciamento de pacotes UBUNTU/DEBIAN
//-----------------------------------------

// O que é um pacote?
// Um pacote no Linux é uma unidade de software que pode conter:
// - Um programa (ex: navegador, editor de texto)
// - Um driver para hardware (ex: placa de vídeo, impressora)
// - Um codec para reprodução de mídia (ex: mp3, mp4, etc.)
// Ele geralmente inclui o executável, bibliotecas, arquivos de configuração e documentação.

// Lista todos os pacotes disponíveis para download
const listarPacotesDisponiveis = 'apt list';

// Lista todos os pacotes que estão instalados no sistema
const listarPacotesInstalados = 'apt list --installed';

// Lista pacotes que possuem atualizações disponíveis
const listarPacotesAtualizaveis = 'apt list --upgradeable';

// Busca um pacote específico (exemplo: samba)
const buscarPacoteSamba = 'apt search samba';

// Busca o pacote do Apache
const buscarPacoteApache = 'apt search apache';

// Busca o pacote net-tools
const buscarPacoteNetTools = 'apt search net-tools';

// Instala o pacote net-tools
const instalarNetTools = 'apt install net-tools';

// Exibe informações de rede, como IP e interfaces
const exibirInformacoesRede = 'ifconfig';

// Baixa arquivos da internet usando o link direto
const baixarArquivoComWget = 'wget url-do-link-de-download';

// Instala o utilitário unzip (para descompactar arquivos .zip)
// OBS: Corrigido erro de digitação em 'unsip' para 'unzip'
const instalarUnzip = 'apt install unzip';

// Descompacta um arquivo ZIP
const descompactarArquivoZip = 'unzip main.zip';

// Remove o pacote net-tools do sistema
const removerNetTools = 'apt remove net-tools -y';

// Edita os repositórios de onde os pacotes são baixados
const editarFontesRepositorios = 'apt edit-sources';

//-----------------------------------------------------
// Atualização do sistema operacional
//-----------------------------------------------------

// Atualiza a lista de pacotes disponíveis nos repositórios
const atualizarRepositorios = 'apt update';

// Atualiza os pacotes instalados para as versões mais recentes
const atualizarSistema = 'apt upgrade';

//----------------------------------------------
// Gerenciamento de pacotes FEDORA / Red Hat / CentOS
//----------------------------------------------

// Busca o pacote net-tools nos repositórios
const buscarNetToolsRedHat = 'dnf search net-tools';

// Instala o pacote net-tools usando DNF
const instalarNetToolsRedHat = 'dnf install net-tools -y';

// Remove o pacote net-tools usando DNF
const removerNetToolsRedHat = 'dnf remove net-tools -y';

// Instala o servidor HTTP (Apache) usando YUM (usado em versões mais antigas do Red Hat/CentOS)
const instalarHttpdComYum = 'yum install httpd -y';

// Instala um pacote .rpm local com DNF
const instalarPacoteRpmLocal = 'dnf install ./nome-do-arquivo';

//------------------------------------------------------
// Instalação de arquivo DEB
//------------------------------------------------------

// Instala um pacote .deb local usando APT
const instalarPacoteDebLocal = 'apt install ./nome-do-arquivo';

