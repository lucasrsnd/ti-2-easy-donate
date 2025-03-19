document.addEventListener('DOMContentLoaded', function () {
const userEmail = getCookie("usuarioEmail");

  if (userEmail !== null && userEmail !== "") {
    console.log("Validado:");
    setnewcookie(userEmail);
  } else {
    alert("Sem autorização");
    console.log("Cookie não encontrado ou está vazio");
    window.location.href = "/src/front/cadastroelogin/login.html";
  }
});

async function setnewcookie(email) {
  const response = await fetch('http://localhost:8080/api/get/cpf', {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Accept: "application/json",
    },
    body: JSON.stringify({ "email": email }),
  });
  if (response.ok) {
    const cpf = await response.text();
    document.cookie = `usercpf=${cpf}; path=/`;
  }
}
async function fetchMaterials() {
  try {
    const response = await fetch('http://localhost:8080/api/materiais');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const materials = await response.json();
    const select = document.getElementById('material-select');
    materials.forEach(material => {
      const option = document.createElement('option');
      option.value = material.id;
      option.textContent = material.nomeMaterial;
      select.appendChild(option);
    });
  } catch (error) {
    console.error('Erro ao buscar materiais:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchMaterials);

const button = document.querySelector("#btnModal");
const modal = document.querySelector("dialog");
const closeModal = document.querySelector("#closeModal");

button.onclick = function () {
  modal.showModal();
};

closeModal.onclick = function () {
  modal.close();
};

  button.onclick = function () {
    modal.showModal();
  };
  
  closeModal.onclick = function () {
    modal.close();
  };
  
  const submitButton = document.getElementById('submit-material');
submitButton.onclick = async function () {
  const select = document.getElementById('material-select');
  const validade = document.getElementById('input-validade').value;

  const selectedMaterialId = select.value;

  if (!selectedMaterialId  || !validade) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const data = {
    userCpf: {cpf : getCookie("usercpf")},
    idMaterial: { id: selectedMaterialId },
    validade: validade
  };

  try {
    const response = await fetch('http://localhost:8080/api/insert/material/doador', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    alert('Material cadastrado com sucesso!');
    window.location.reload();
    modal.close();
  } catch (error) {
    console.error('Erro ao cadastrar material:', error);
    alert('Erro ao cadastrar material.');
  }
};

function deletecookie(){
apagarCookie("usuarioEmail");
apagarCookie("usercpf");
console.log("Cookies apagados");
}

async function fetchMateriaisUser(){
  const data = {
    cpf:getCookie("usercpf"),
  };
  try {
    const response = await fetch('http://localhost:8080/api/get/materialUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const materiais = await response.json();
    renderMateriais(materiais);
  } catch (error) {
    console.error('Erro ao achar materiais:', error);
  }
}

function renderMateriais(materiais) {
  const tbody = document.querySelector(".bottom-data .orders table tbody");
  tbody.innerHTML = ""; 

  materiais.forEach(material => {
      const tr = document.createElement("tr");

      const tdMaterial = document.createElement("td");
      tdMaterial.innerHTML = `<p>${material.idMaterial.nomeMaterial}</p>`;
      tr.appendChild(tdMaterial);

      const tdValidade = document.createElement("td");
      tdValidade.textContent = material.validade;
      tr.appendChild(tdValidade);

      const tdStatus = document.createElement("td");
      const spanStatus = document.createElement("span");
      spanStatus.className = "status " + (material.aprovacao ? 'completed' : 'process');
      spanStatus.textContent = material.aprovacao ? 'Cadastrado' : 'Pendente';
      tdStatus.appendChild(spanStatus);
      tr.appendChild(tdStatus);

      tbody.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', fetchMateriaisUser);