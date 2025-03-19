
const usuarioLogado = getCookie("usuarioEmail");

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
  let name = document.getElementById("usernameSignUp").value;
  let cpf = document.getElementById("usercpfSignUp").value;
  let data = document.getElementById("userdnSignUp").value;
  let telefone = document.getElementById("usernameTelSignUp").value;
  let email = document.getElementById("emailSignUp").value;
  let senha = document.getElementById("passwordSignUp").value;

  if (
    name === "" ||
    cpf === "" ||
    data === "" ||
    telefone === "" ||
    email === "" ||
    senha === ""
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Por favor, insira um email válido.");
    return;
  }


  data = new Date(data).toISOString().split("T")[0];

  const response = await fetch("http://localhost:8080/api/insert/doador", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Accept: "application/json",
    },
    body: JSON.stringify({
      cpf: cpf,
      nome: name,
      email: email,
      nascimento: data,
      telefone: telefone,
      senha: senha,
    }),
  });

  if (response.ok) {
    const responseData = await response.text();
    console.log(responseData);
    alert("Cadastro realizado com sucesso!");
  } else {
    const errorData = await response.text();
    console.error("Error:", errorData);
    alert("Falha no cadastro. Por favor, tente novamente.");
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

async function login() {
  let email = document.getElementById("usernameSignIn").value;
  let senha = document.getElementById("passwordSignIn").value;

  var contactData = {
    email: email,
    senha: senha,
  };

  fetch("http://localhost:8080/api/login/doador", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Accept: "application/json",
    },
    body: JSON.stringify(contactData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao realizar a requisição", response.text());
      }
      setCookie("usuarioEmail", email, 2, "/");
      window.location.href = "/src/front/doador/cadastrarMateriaisDoador/cadastrarMaterialDoador.html";
      
      return response.text();
    })
    .then((data) => {
      console.log("Requisição bem-sucedida:", data);
    })
    .catch((error) => {
      console.error("Erro ao realizar a requisição:", error);
      alert(
        "E-mail ou Senha incorretos ou login não aprovado, por favor verifique suas credenciais de acesso"
      );
    });
  console.log(contactData);
}



 




