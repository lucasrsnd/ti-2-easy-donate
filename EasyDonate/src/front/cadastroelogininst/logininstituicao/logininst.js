const usuarioLogado = localStorage.getItem("usuarioLogado");

if (usuarioLogado !== null) {
} else {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  const sign_in_btn2 = document.querySelector("#sign-in-btn2");
  const sign_up_btn2 = document.querySelector("#sign-up-btn2");

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
  });

  sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
  });

  document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      realizarLogin();
    });

    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      submitForm();
    });
  });
}

async function submitForm() {
  let cnpj = document.getElementById("cnpjinst").value;
  let senha = document.getElementById("senhainst").value;

  if (
    cnpj === "" ||
    senha === ""
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!validateCNPJ(cnpj)) {
    alert("Por favor, digite um CNPJ válido");
  }

  var contactData = {
    cnpj: cnpj,
    senha: senha
  };



  response1 = await fetch("http://localhost:8080/inst/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Accept: "application/json",
    },
    body: JSON.stringify(contactData),
  });

  if (response1.ok) {
    const responseData = await response1.text();
    console.log(responseData);
alert("Login realizado com sucesso!");
//criarCookie();
document.cookie = `instcnpj=${cnpj}; path=/`;
window.location.href = "/src/front/instituição/cadastrarMateriais/cadastrarMaterialInst.html";
} else {
const errorData = await response1.text();
console.error("Error:", errorData);
alert("Falha no Login. Por favor, tente novamente.");
}
  console.log(contactData);
}

document.getElementById("LoginBtn").addEventListener("click", submitForm);

function validateCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, "");
  const regex = /^\d{14}$/;
  return regex.test(cnpj);
}