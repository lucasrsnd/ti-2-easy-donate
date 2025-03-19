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

function createCardInstituicao(instituicao) {
  let ul = document.querySelector(".task-list");
  let li = document.createElement("li");
  li.className = "completed";
  let div = document.createElement("div");
  div.className = "task-title";
  let divName = document.createElement("div");
  divName.id = "divP";
  let pNome = document.createElement("p");
  pNome.id = "listInst";
  pNome.textContent = "Nome: " + instituicao.nome;
  let pCnpj = document.createElement("p");
  pCnpj.textContent = "CNPJ: " + instituicao.cnpj;
  let pMateriais = document.createElement("p");
  pMateriais.textContent = "Materiais Necessitados:\n";

  instituicao.materiais.forEach(material => {
    const item = document.createElement("p");
    item.textContent = material.nomeMaterial + " (" + material.quantidade + ")";
    pMateriais.appendChild(item);
  });

  let divButton = document.createElement("div");
  divButton.className = "divB";
  let button = document.createElement("button");

  button.textContent = "Doar";
  button.id = "btn-entrarInstituicao";

  const modal = document.querySelector("dialog");
  const closeModal = document.querySelector("#closeModal");
  const doarButton = document.querySelector("#doar-button");

  button.onclick = function () {
    fetchAndPopulateDropdown();
    doarButton.setAttribute("data-cnpj", instituicao.cnpj);
    modal.showModal();
  };

  closeModal.onclick = function () {
    modal.close();
  };

  divName.append(pNome, pCnpj, pMateriais);
  divButton.append(button);
  div.append(divName, divButton);
  li.append(div);
  ul.appendChild(li);
}

async function fetchInstituicoes() {
  try {
    const response = await fetch('http://localhost:8080/api/get/allmaterialinst');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

function renderInstituicao(data) {
  const instituicoesMap = new Map();

  data.forEach((item) => {
    const cnpj = item.cnpjInst.cnpj;
    if (!instituicoesMap.has(cnpj)) {
      instituicoesMap.set(cnpj, {
        nome: item.cnpjInst.nome,
        cnpj: item.cnpjInst.cnpj,
        materiais: []
      });
    }
    instituicoesMap.get(cnpj).materiais.push({
      nomeMaterial: item.idMaterial.nomeMaterial,
      quantidade: item.quantidade
    });
  });

  instituicoesMap.forEach((inst) => {
    createCardInstituicao(inst);
  });
}

window.addEventListener("load", async (ev) => {
  const instituicoes = await fetchInstituicoes();
  renderInstituicao(instituicoes);
});

async function Doar(cnpjinst) {
  const data = {
    doadores: { cpf: getCookie("usercpf") },
    instituicoes: { cnpj: cnpjinst }
  };
  try {
    const response = await fetch('http://localhost:8080/doacoes/doacao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData.idDoacao;
  } catch (error) {
    console.error('Erro ao doar:', error);
  }
}

async function DoarItem(idmaterialUser) {
  const data = [{
    cadastrarmaterialuser: { id_material_user: idmaterialUser },
    doacao: { iddoacao: 1 }
  }];
  try {
    const response = await fetch('http://localhost:8080/itemdoado/item/doacao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      console.log("Item doado");
    }
  } catch (error) {
    console.error('Erro ao doar:', error);
  }
}

async function fetchAndPopulateDropdown() {
  const selectElement = document.querySelector('dialog select');
  try {
    const response = await fetch('http://localhost:8080/api/get/materialUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cpf: getCookie("usercpf") }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    updateDropdown(selectElement, data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function updateDropdown(select, items) {
  select.innerHTML = '';

  items.forEach(item => {
    const option = document.createElement('option');
    option.value = item.idMaterialUser;
    option.textContent = item.idMaterial.nomeMaterial;
    select.appendChild(option);
  });
}

document.getElementById("add-button").addEventListener("click", () => {
  const produtoDoacao = document.querySelector(".produto-doacao");
  produtoDoacao.innerHTML = '';

  const selectElement = document.createElement("select");
  selectElement.name = "select";
  selectElement.className = "dropdown-materials";
  produtoDoacao.appendChild(selectElement);
});

document.getElementById("doar-button").addEventListener("click", async () => {
  const modal = document.querySelector("dialog");
  const cnpjinst = modal.querySelector("#doarButton").getAttribute("data-cnpj");
  const selectElement = modal.querySelector("select");
  const idMaterialUser = selectElement.value;

  try {
    await DoarItem(idMaterialUser);
    modal.close();
  } catch (error) {
    console.error('Erro ao processar a doação:', error);
  }
});

document.addEventListener('DOMContentLoaded', fetchAndPopulateDropdown);
