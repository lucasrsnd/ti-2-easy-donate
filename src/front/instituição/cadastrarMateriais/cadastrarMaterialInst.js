document.addEventListener('DOMContentLoaded', function () {
  const instcnpj = getCookie("instcnpj");

  if (instcnpj !== null && instcnpj !== "") {
    console.log("Validado:");
  } else {
    alert("Sem autorização");
    console.log("Cookie não encontrado ou está vazio");
    window.location.href = "/src/front/cadastroelogininst/logininstituicao/logininst.html";
  }
});

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


document.addEventListener('DOMContentLoaded', function () {
  const instcnpj = getCookie("instcnpj");

  if (instcnpj !== null && instcnpj !== "") {
    console.log("Validado:");
  } else {
    alert("Sem autorização");
    console.log("Cookie não encontrado ou está vazio");
    window.location.href = "/src/front/cadastroelogininst/login.html";
  }
});


// MODAL
const button = document.querySelector("#btnModal");
const modal = document.querySelector("dialog");
const closeModal = document.querySelector("#closeModal");

button.onclick = function () {
  modal.showModal();
};

closeModal.onclick = function () {
  modal.close();
};

const submitButton = document.getElementById('submit-material-request');
submitButton.onclick = async function () {
  const select = document.getElementById('material-select');
  const quantidade = document.getElementById('input-material-desejado').value;

  const selectedMaterialId = select.value;

  if (!selectedMaterialId || !quantidade ) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const data = {
    cnpjInst: {cnpj : getCookie("instcnpj")},
    idMaterial: { id: selectedMaterialId },
    quantidade: quantidade
  };

  try {
    const response = await fetch('http://localhost:8080/api/insert/materialnecessitado', {
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

async function fetchHistoricoMateriais() {
  try {
    const response = await fetch('http://localhost:8080/api/necessitado/intituicao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "cnpj": getCookie("instcnpj")
      })
    });

    if (!response.ok) {
      throw new Error('Erro ao carregar histórico de materiais');
    }

    const data = await response.json();

    const tableBody = document.querySelector('.orders tbody');
    tableBody.innerHTML = ''; 

    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.idMaterial.nomeMaterial}</td>
        <td>${item.quantidade}</td>
      `;
      tableBody.appendChild(row);
    });

  } catch (error) {
    console.error('Erro:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchHistoricoMateriais();
});