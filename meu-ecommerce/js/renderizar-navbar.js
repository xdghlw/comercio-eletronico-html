const header = document.querySelector("header");
header.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="">
            <div id="index-container-fluid" class="container-fluid">

                <div class="dropdown mt-0">
                    <button class="btn btn-primary dropdown-toggle border-light" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="bi bi-person-fill"></i>
                    </button>
                    <ul id="cabecalho" class="dropdown-menu">

                    </ul>
                </div>

                <button class="navbar-toggler navbar-toggler-sm bg-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse mt-0" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
                        <li class="nav-item">
                            <a class="btn btn-primary nav-link " href="index.html">
                                <i class="bi bi-house-door"></i>
                                Página inicial
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-primary" aria-current="page" href="produtos.html">
                                <small><i class="bi bi-bag mx-1"></i></small>Produtos</a>
                        </li>

                        <li class="nav-item">
                            <a class="btn btn-primary nav-link" href="carrinho.html">
                                <div class="d-inline position-relative" style="padding-top: 5px;">
                                    <i class="bi bi-cart2 mx-1"></i>
                                    <small><small><span id="qtde-carrinho"
                                                class="position-absolute top-0 start-50 translate-middle badge rounded-pill text-bg-danger opacity-100 border border-light"></span></small></small>
                                </div>
                                Carrinho de Compras
                            </a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="btn btn-primary nav-link" aria-current="page" href="contato.html">Contato<small><i
                                        class="bi bi-chat-left-dots mx-1"></i></small></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
`;

const menu = document.getElementById("cabecalho");
menu.innerHTML = "";

const usuarioLogado = localStorage.getItem("usuarioLogado");

if (!usuarioLogado) {
  menu.innerHTML = `
      <li>
        <a class="dropdown-item" href="login.html">Entrar</a>
      </li>
      <li>
          <a class="dropdown-item" href="cadastro.html">Cadastrar</a>
      </li>
    `;
} else {
  menu.innerHTML = `
      <li>
        <a class="dropdown-item" href="meus_dados.html">Meus Dados</a>
      </li>
      <li>
        <a class="dropdown-item" href="meus_pedidos.html">Meus Pedidos</a>
      </li>
      <li><hr class="dropdown-divider"></li>
      <li>
        <a class="dropdown-item text-danger" href="#" onclick="finalizarSessao()">Sair</a>
      </li>
    `;
}

function atualizarBadge() {
  try {
    let qtdeCarrinho = 0;
    const objetoProdutos = JSON.parse(localStorage.getItem("carrinho"));
    Object.keys(objetoProdutos).forEach(produtoId => {
      qtdeCarrinho += objetoProdutos[produtoId].quantidade
    });
    if (Object.keys(objetoProdutos) != 0) {
      document.getElementById("qtde-carrinho").textContent = "+".concat(qtdeCarrinho);
    } else {
      document.getElementById("qtde-carrinho").textContent = "";
    }
  } catch (SyntaxError) {
  }
}
atualizarBadge();

function finalizarSessao() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}