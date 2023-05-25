document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.querySelector(".conteudo-formulario");
    var botaoEnviar = document.querySelector(".conteudo-formulario-campo-botao");
    
    botaoEnviar.addEventListener("click", function(event) {
      event.preventDefault();
      
      var nome = document.getElementById("nome").value;
      var email = document.getElementById("Email").value;
      var sobre = document.getElementById("sobre").value;
      var duvida = document.getElementById("caixaMensagem").value;
      
      if (nome !== '' && email !== '' && sobre !== '' && duvida !== '') {
        alert("Formulário enviado com sucesso!");
        formulario.reset();
      } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    });
  });