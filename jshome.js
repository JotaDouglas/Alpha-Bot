window.onload = function() {
    alert("Bem-vindo à página Home Alpha Bot!");
};

document.addEventListener("DOMContentLoaded", function() {
    var comprarButton = document.querySelector(".conteudo-principal-botao");
  
    comprarButton.addEventListener("click", function() {
      alert("Você será redirecionado para a pagina de planos!");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var footerImagem = document.querySelector(".rodape-imagem");
  
    footerImagem.addEventListener("mouseover", function() {
      this.classList.add("rodape-imagem-animada");
    });
  
    footerImagem.addEventListener("mouseout", function() {
      this.classList.remove("rodape-imagem-animada");
    });
  });

  