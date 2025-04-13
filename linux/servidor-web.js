//====================================================
// Servidor Web - Apache2
//====================================================

//----------------------------------------------------
// Instalação e configuração do Apache2
//----------------------------------------------------

// Instala o Apache2 no sistema com confirmação automática (-y)
const instalarApache2 = 'apt install apache2 -y';

// Verifica o status do serviço Apache2 (se está ativo ou inativo)
const verificarStatusApache2 = 'systemctl status apache2';

// Acessa o diretório onde os arquivos do Apache são armazenados (padrão: /var/www/html)
const acessarDiretorioHtmlApache = 'cd /var/www/html/';

// Exclui o arquivo "index.html" que vem por padrão na instalação do Apache
const excluirArquivoIndexHtml = 'rm index.html';

// Cria ou edita o arquivo "index.html" no diretório do Apache
const criarOuEditarIndexHtml = 'nano index.html';

/*
Exemplo simples de conteúdo para o arquivo "index.html":

<html>
    <h1>Este é o meu site HTML disponível em um servidor Linux</h1>
</html>

Esse conteúdo básico exibe um título na página inicial do servidor Apache, mostrando que o servidor está funcionando corretamente.
*/
