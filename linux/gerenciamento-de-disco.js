// =====================================
// Gerenciamento de Disco no Linux
// =====================================

// ----------------------------------------
// Discos, Sistema de Arquivos e Partições
// ----------------------------------------

// Tipos de disco:
// O disco é o dispositivo de armazenamento onde os arquivos e o sistema operacional são gravados.

// HD (Hard Disk Drive): 
// Disco mais antigo, com grande capacidade de armazenamento. 
// Vantagens: baixo custo e alta capacidade.
// Desvantagens: mais lento, consome mais energia, mais sensível a impactos.

// SSD (Solid State Drive): 
// Disco mais moderno e muito mais rápido que o HD tradicional. 
// Vantagens: velocidade e durabilidade.
// Desvantagens: menor capacidade e custo mais elevado (embora isso esteja mudando).


// Sistema de Arquivos:
// É a estrutura que o sistema operacional usa para organizar e recuperar os dados armazenados no disco.
// Exemplos por sistema operacional:

// - macOS   -> HFS
// - Linux   -> Ext3, Ext4, XFS
// - Windows -> FAT32, NTFS


// Particionamento:
// Particionar significa dividir fisicamente um disco em partes independentes chamadas *partições*.
// Cada partição pode ter seu próprio sistema de arquivos e pode ser usada separadamente.

// No Windows:
// Cada partição recebe uma letra (C:, D:, E:, ...), como se fosse um novo "disco".

// No Linux:
// Cada disco é identificado como `sdX`, onde X é uma letra (`a`, `b`, `c`, ...).
// As partições são numeradas: `sda1`, `sda2`, `sdb1`, etc.


// ---------------------------
// Adicionando um novo disco
// ---------------------------

// Visualizar os discos conectados (árvore de dispositivos em blocos)
const comandoVisualizarDiscos = 'lsblk';

// Visualizar detalhes dos discos com `fdisk`
const comandoListarDiscosComFdisk = 'fdisk -l';


// -----------------------------------------------
// Particionando e Formatando Discos via Terminal
// -----------------------------------------------

// Comando para iniciar o particionamento de um novo disco (ex: /dev/sdb)
const comandoParticionarDisco = 'fdisk /dev/sdb';

// Dicas durante o particionamento com `fdisk`:
// - `n` → criar nova partição
// - `p` → definir como partição primária
// - `1` → número da partição
// - `w` → salvar e sair

// Após particionar, formatar a partição (ex: sdb1) com sistema de arquivos ext4:
const comandoFormatarParticao = 'mkfs.ext4 /dev/sdb1';


// ------------------------------------
// Montando e Desmontando Partições
// ------------------------------------

// Acessar diretório onde os discos são montados
const comandoAcessarDiretorioMontagem = 'cd /mnt/';

// Criar uma nova pasta onde o disco será montado
const comandoCriarDiretorioParaMontagem = 'mkdir disco2';

// Montar o disco na pasta criada
const comandoMontarParticao = 'mount /dev/sdb1 /mnt/disco2/';

// Desmontar o disco quando não for mais necessário
const comandoDesmontarParticao = 'umount /dev/sdb1';


// ------------------------------------
// Montando Discos Automaticamente
// ------------------------------------

// Editar o arquivo de configuração de montagem automática:
const comandoEditarFstab = 'nano /etc/fstab';

// No final do arquivo, adicionar uma linha como:
// /dev/sdb1   /mnt/disco2   ext4   defaults   0  0
// Isso garante que o disco seja montado automaticamente na inicialização do sistema.


