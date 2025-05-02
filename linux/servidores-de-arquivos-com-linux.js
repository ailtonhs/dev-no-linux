//==================================================
// Servidor de Arquivos com Linux e SAMBA
//==================================================


/*
O que é um Servidor de Arquivos?

Um servidor de arquivos é um computador configurado para armazenar,
gerenciar e disponibilizar arquivos para outros dispositivos em uma rede.

Ele permite que usuários acessem, compartilhem e editem arquivos de forma centralizada,
evitando a necessidade de duplicar os dados em cada máquina.

No Linux, é comum usar o SAMBA para transformar o sistema em um servidor de arquivos,
compatível com máquinas Windows, permitindo o compartilhamento de pastas pela rede
de forma simples e segura.
*/

//----------------------------------------------------
// Instalação do SAMBA e Configuração Inicial
//----------------------------------------------------

// Instala o pacote SAMBA no sistema com confirmação automática (-y)
const instalarSamba = 'apt install samba -y';

// Cria a pasta "publica" no diretório atual (idealmente dentro de /disk2, por exemplo)
const criarDiretorioPublico = 'mkdir publica';

// Define permissões completas de leitura, escrita e execução para todos os usuários na pasta "publica"
const permissaoTotalParaPublica = 'chmod 777 publica/';

// Abre o arquivo de configuração do SAMBA para edição
const editarConfiguracaoSamba = 'nano /etc/samba/smb.conf';

/*
Trecho a ser adicionado no final do arquivo smb.conf:

[publica]              # Nome do compartilhamento
path = /disk2/publica  # Caminho absoluto da pasta que será compartilhada
writable = yes         # Permite gravação (escrita) na pasta
guest ok = yes         # Permite acesso sem autenticação
guest only = yes       # Apenas usuários convidados terão acesso
*/

// Reinicia o serviço do SAMBA para aplicar as novas configurações
const reiniciarServicoSamba = 'systemctl restart smbd';

// Verifica o status atual do serviço SAMBA
const verificarStatusSamba = 'systemctl status smbd';

// Ativa o SAMBA para iniciar automaticamente junto com o sistema
const ativarSambaAoInicializar = 'systemctl enable smbd';

//----------------------------------------------------------
// Configurando o Acesso pela Máquina Cliente (Windows)
//----------------------------------------------------------

/*
Acesso direto via explorador de arquivos:

1. Abra o Explorador de Arquivos no Windows.
2. Digite na barra de endereços: \\192.168.122.252\publica
3. Pressione Enter.
4. Uma janela pedirá credenciais se o acesso não for como convidado.

Mapeando a pasta como unidade de rede:

1. Vá em "Este Computador".
2. Clique com o botão direito e escolha "Mostrar mais opções" > "Mapear unidade de rede".
3. Escolha uma letra para a unidade.
4. Informe o caminho da pasta: \\192.168.122.252\publica
5. Conclua o mapeamento.
*/


