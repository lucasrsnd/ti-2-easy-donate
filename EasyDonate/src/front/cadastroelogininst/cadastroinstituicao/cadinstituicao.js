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
  let name = document.getElementById("nomeinst").value;
  let cnpj = document.getElementById("cnpjinst").value;
  let cep = document.getElementById("cepinst").value;
  let bairro = document.getElementById("nomebairroinst").value;
  let rua = document.getElementById("nomeruainst").value;
  let senha = document.getElementById("senhainstituicao").value;
  let numeroLugar = parseInt(document.getElementById("numeroestabelecimentoinst").value
  
  );

  if (
    name === "" ||
    cnpj === "" ||
    cep === "" ||
    bairro === "" ||
    rua === "" ||
    numeroLugar === "" ||
    senha === ""
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!validateCEP(cep)) {
    alert("Por favor, digite um CEP válido");
  }

  if (!validateCNPJ(cnpj)) {
    alert("Por favor, digite um CNPJ válido");
  }

  var contactData = {
    cnpj: cnpj,
    nome: name,
    cep: cep,
    bairro: bairro,
    rua: rua,
    numerolugar: numeroLugar,
    senha: senha
  };



  response1 = await fetch("http://localhost:8080/inst/insert", {
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
alert("Cadastro realizado com sucesso!");
} else {
const errorData = await response1.text();
console.error("Error:", errorData);
alert("Falha no cadastro. Por favor, tente novamente.");
}
  console.log(contactData);
}

document.getElementById("LoginBtn").addEventListener("click", submitForm);

function validateCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, "");
  const regex = /^\d{14}$/;
  return regex.test(cnpj);
}

function validateCEP(cep) {
  cep = cep.replace(/[^\d]+/g, "");

  const regex = /^\d{8}$/;

  return regex.test(cep);
}