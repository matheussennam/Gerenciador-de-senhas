// Array para armazenar senhas (será salvo no localStorage)
let senhas = [];

// Carrega senhas do localStorage ao iniciar
window.onload = function() {
    carregarSenhas();
    exibirSenhas();
}

// Adicionar nova senha
function adicionarSenha() {
    const site = document.getElementById('site').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Validação
    if (!site || !usuario || !senha) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Cria objeto com os dados
    const novaSenha = {
        id: Date.now(), // ID único baseado em timestamp
        site: site,
        usuario: usuario,
        senha: senha,
        data: new Date().toLocaleDateString()
    };

    // Adiciona ao array
    senhas.push(novaSenha);

    // Salva no localStorage
    salvarSenhas();

    // Limpa o formulário
    document.getElementById('site').value = '';
    document.getElementById('usuario').value = '';
    document.getElementById('senha').value = '';

    // Atualiza a lista
    exibirSenhas();

    alert('Senha salva com sucesso!');
}

// Gerar senha aleatória forte
function gerarSenha() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    let senha = '';
    
    for (let i = 0; i < 16; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    document.getElementById('senha').value = senha;
}

// Exibir todas as senhas
function exibirSenhas(senhasFiltradas = null) {
    const listaSenhas = document.getElementById('listaSenhas');
    const senhasParaExibir = senhasFiltradas || senhas;

    if (senhasParaExibir.length === 0) {
        listaSenhas.innerHTML = '<p style="text-align:center; color:#999;">Nenhuma senha cadastrada ainda.</p>';
        return;
    }

    listaSenhas.innerHTML = '';

    senhasParaExibir.forEach(item => {
        const div = document.createElement('div');
        div.className = 'senha-item';
        div.innerHTML = `
            <h3>🌐 ${item.site}</h3>
            <p><strong>Usuário:</strong> ${item.usuario}</p>
            <p><strong>Senha:</strong> <span class="senha-oculta" id="senha-${item.id}">••••••••</span></p>
            <p><small>Cadastrada em: ${item.data}</small></p>
            <div class="botoes-acao">
                <button onclick="copiarSenha('${item.senha}')">📋 Copiar</button>
                <button onclick="mostrarSenha(${item.id}, '${item.senha}')">👁️ Mostrar</button>
                <button onclick="deletarSenha(${item.id})">🗑️ Deletar</button>
            </div>
        `;
        listaSenhas.appendChild(div);
    });
}

// Mostrar/Ocultar senha
function mostrarSenha(id, senha) {
    const elemento = document.getElementById(`senha-${id}`);
    
    if (elemento.textContent === '••••••••') {
        elemento.textContent = senha;
        elemento.style.color = '#333';
    } else {
        elemento.textContent = '••••••••';
        elemento.style.color = '#999';
    }
}

// Copiar senha para área de transferência
function copiarSenha(senha) {
    navigator.clipboard.writeText(senha);
    alert('Senha copiada para a área de transferência!');
}

// Deletar senha
function deletarSenha(id) {
    if (confirm('Tem certeza que deseja deletar esta senha?')) {
        senhas = senhas.filter(item => item.id !== id);
        salvarSenhas();
        exibirSenhas();
        alert('Senha deletada com sucesso!');
    }
}

// Buscar senha
function buscarSenha() {
    const busca = document.getElementById('busca').value.toLowerCase();
    
    if (busca === '') {
        exibirSenhas();
        return;
    }

    const senhasFiltradas = senhas.filter(item => 
        item.site.toLowerCase().includes(busca)
    );

    exibirSenhas(senhasFiltradas);
}

// Salvar no localStorage
function salvarSenhas() {
    localStorage.setItem('senhas', JSON.stringify(senhas));
}

// Carregar do localStorage
function carregarSenhas() {
    const senhasSalvas = localStorage.getItem('senhas');
    if (senhasSalvas) {
        senhas = JSON.parse(senhasSalvas);
    }
}
