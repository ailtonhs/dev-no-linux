// --------------------
// Tarefas administrativas com root
// --------------------

// Exibe o conteúdo do arquivo de grupos do sistema.
// Útil para verificar quais usuários fazem parte de quais grupos.
const visualizarArquivoGroup = 'cat /etc/group';


// Cria um diretório chamado "Planilhas" com permissões de administrador.
// Exemplo: se um usuário comum não tiver permissão para criar pastas em certos diretórios.
const criarDiretorioComSudo = 'sudo mkdir Planilhas';


// Define ou altera a senha do usuário root (superusuário).
// Necessário para permitir login direto como root, se habilitado.
const definirSenhaRoot = 'sudo passwd root';


// Alterna para o usuário root (superusuário).
// Após digitar, será solicitada a senha do root.
const entrarComoRoot = 'su';


// Volta para um usuário comum (no exemplo, 'ailtonhs') a partir do root.
// Útil quando você quer sair da sessão root.
const voltarParaUsuarioNormal = 'su ailtonhs';


// Exibe as configurações do servidor SSH (acesso remoto).
// Útil para verificar se o login root está habilitado via SSH, por exemplo.
const visualizarConfiguracoesSSH = 'cat /etc/ssh/sshd_config';

// Abre o arquivo de configuração SSH para edição com o editor nano.
const editarSSHComNano = 'nano /etc/ssh/sshd_config';

// Mostra o status do serviço SSH (ativo, inativo, erro, etc).
const statusServicoSSH = 'systemctl status sshd';

// Reinicia o serviço SSH, necessário após alterações no arquivo de configuração.
const reiniciarServicoSSH = 'systemctl restart sshd';


// --------------------
// Editores de texto no terminal
// --------------------

// Abre o arquivo "leia-me.txt" no editor vi.
// Pressione 'i' para entrar no modo de inserção. Para salvar e sair: 'Esc' → ':' → 'wq'
const editarComVi = 'vi leia-me.txt';

// Abre o mesmo arquivo no editor nano (mais simples e intuitivo que o vi).
const editarComNano = 'nano leia-me.txt';


// --------------------
// Histórico de comandos
// --------------------

// Exibe os últimos comandos usados no terminal.
// Por padrão, mostra os últimos 1000 comandos.
const exibirHistoricoComandos = 'history';

// Executa um comando específico do histórico usando o número exibido.
// Exemplo: '!203' executa o comando número 203 do histórico.
const executarComandoPorNumero = '!número_do_comando';


// Reexecuta o último comando executado no terminal.
// Muito útil quando você esquece de usar `sudo`. Exemplo: `sudo !!`
const executarUltimoComando = '!!';

// Filtra o histórico para encontrar comandos que contenham a palavra "Planilhas".
// Ideal para lembrar como você executou algo dias atrás.
const buscarComandoPorTermo = 'history | grep "Planilhas"';

// Outro exemplo de filtro no histórico, procurando apenas comandos 'ls'.
const buscarComandoLs = 'history | grep "ls"';


// Define o formato de data e hora a ser mostrado no histórico.
// O "%c" inclui data e hora completas. Exemplo de saída: "Tue Apr 9 12:00:00 2025"
const definirFormatoDataHoraHistorico = 'export HISTTIMEFORMAT="%c "';


// Limpa todo o histórico de comandos atual.
// Atenção: essa ação é irreversível!
const limparHistorico = 'history -c';

// Desativa temporariamente o salvamento do histórico de comandos digitados.
const desativarHistorico = 'set +o history';

// Reativa o salvamento do histórico após ter sido desativado.
const ativarHistorico = 'set -o history';

// Salva manualmente o histórico atual no arquivo de histórico do usuário (~/.bash_history).
// Útil se você quiser garantir que ele seja salvo mesmo antes de sair da sessão.
const salvarHistoricoManual = 'history -w';