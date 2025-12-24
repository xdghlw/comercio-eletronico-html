      function atualizarMenuAvatar() {
        const menu = document.getElementById("cabecalho");
        menu.innerHTML = "";

        const usuarioLogado = localStorage.getItem("usuarioLogado");

        if (!usuarioLogado) {
          // Usuário NÃO logado
          menu.innerHTML = `
          
      <li>
        <a class="dropdown-item" href="login.html">Entrar</a>
      </li>
      <li>
          <a class="dropdown-item" href="cadastro.html">Cadastrar</a>
      </li>
    `;
        } else {
          // Usuário logado
          menu.innerHTML = `
      <li>
        <a class="dropdown-item" href="meus_dados.html">Meus Dados</a>
      </li>
      <li>
        <a class="dropdown-item" href="meus_edidos.html">Meus Pedidos</a>
      </li>
      <li><hr class="dropdown-divider"></li>
      <li>
        <a class="dropdown-item text-danger" href="#" onclick="finalizarSessao()">Sair</a>
      </li>
    `;
        }
      }