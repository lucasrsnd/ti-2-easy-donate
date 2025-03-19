
  // EDITAR DOADOR
  document.addEventListener('DOMContentLoaded', function () {
    const userEmail = getCookie("usuarioEmail");
  
    if (userEmail !== null && userEmail !== "") {
      console.log("Validado:");
    } else {
      alert("Sem autorização");
      console.log("Cookie não encontrado ou está vazio");
      window.location.href = "/src/front/cadastroelogin/login.html";
    }
  });
  
    const fields = ['nome', 'cpf', 'data-nascimento', 'telefone', 'email', 'senha'];
    fields.forEach(field => {
        const savedValue = localStorage.getItem(field);
        if (savedValue) {
            document.getElementById(field).innerText = savedValue;
        }
    });


document.querySelector('.report').addEventListener('click', function() {
    const fields = ['nome', 'cpf', 'data-nascimento', 'telefone', 'email', 'senha'];
    fields.forEach(field => {
        const element = document.getElementById(field);
        const value = element.innerText;
        element.innerHTML = `<input type="text" value="${value}" />`;
    });
});


document.getElementById('confirmar-mudancas').addEventListener('click', function() {
    const fields = ['nome', 'cpf', 'data-nascimento', 'telefone', 'email', 'senha'];
    fields.forEach(field => {
        const element = document.getElementById(field);
        const input = element.querySelector('input');
        if (input) {
            const newValue = input.value;
            element.innerText = newValue;
            localStorage.setItem(field, newValue); //por enquanto estou salvando no localstorage
        }
    });
});
function deletecookie(){
  apagarCookie("usuarioEmail");
  apagarCookie("usercpf");
  }