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
// MATERIAL NECESSITADO
function domMaterialNecessitado(material, quantidade) {
  let li = document.createElement("li");
  li.classList.add("completed");

  let div = document.createElement("div");
  div.classList.add("task-title");

  let firstI = document.createElement("i");
  firstI.classList.add("bx", "bx-check-circle");

  let pMaterial = document.createElement("p");
  pMaterial.textContent = material;

  let pQuantidade = document.createElement("p");
  pQuantidade.textContent = quantidade;

  let secondI = document.createElement("i");
  secondI.classList.add("bx", "bx-dots-vertical-rounded");

  div.appendChild(firstI);
  div.appendChild(pMaterial);
  div.appendChild(pQuantidade);
  li.appendChild(div);
  li.appendChild(secondI);

  document.querySelector(".task-list").appendChild(li);
}

function mostraMaterialNecessitado() {
  materialcadastrado.forEach((m) => {
    domMaterialNecessitado(m.nome, m.quantidade);
  });
}

function domMaterialDoado(nome, data, quantidade) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  let p = document.createElement("p");
  p.textContent = nome;
  td1.appendChild(p);

  let td2 = document.createElement("td");
  td2.textContent = data;

  let td3 = document.createElement("td");
  let span = document.createElement("span");
  span.classList.add("quantidade", quantidade.toLowerCase());
  span.textContent = quantidade;
  td3.appendChild(span);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  document.querySelector(".tbody").appendChild(tr);
}

function mostrarMaterialDoado() {
  doacao.forEach((d) => {
    domMaterialDoado(d.nome, d.material, d.quantidade);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const cnpj = getCookie('instcnpj'); 
  const url = 'http://localhost:8080/doacoes/lista/inst';

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cnpj: cnpj })
  })
  .then(response => response.json())
  .then(data => {
      renderDonations(data);
  })
  .catch(error => console.error('Erro:', error));

  function renderDonations(donations) {
      const tbody = document.querySelector('table tbody');
      tbody.innerHTML = ''; 

      donations.forEach(donation => {
          const tr = document.createElement('tr');

          const tdUsuario = document.createElement('td');
          tdUsuario.textContent = donation.doadores.nome;

          const tdMaterial = document.createElement('td');
          tdMaterial.textContent = 'Material Placeholder'; 

          const tdQuantidade = document.createElement('td');
          tdQuantidade.textContent = 'Quantidade Placeholder'; 

          tr.appendChild(tdUsuario);
          tr.appendChild(tdMaterial);
          tr.appendChild(tdQuantidade);

          tbody.appendChild(tr);
      });
  }
});