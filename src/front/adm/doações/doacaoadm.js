
async function fetchAllMateriaisUser() {
    try {
        const response = await fetch('http://localhost:8080/api/get/allmaterialuser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const materiais = await response.json();
        renderMateriais(materiais);
    } catch (error) {
        console.error('Erro ao buscar materiais:', error);
    }
}

function renderMateriais(materiais) {
    const tbody = document.querySelector(".bottom-data .orders table tbody");
    tbody.innerHTML = ""; 

    materiais.forEach(material => {
        const tr = document.createElement("tr");

        const tdNome = document.createElement("td");
        tdNome.innerHTML = `<p>${material.userCpf ? material.userCpf.nome : 'N/A'}</p>`;
        tr.appendChild(tdNome);

        const tdCpf = document.createElement("td");
        tdCpf.textContent = material.userCpf ? material.userCpf.cpf : 'N/A';
        tr.appendChild(tdCpf);

        const tdMaterial = document.createElement("td");
        tdMaterial.innerHTML = `<p>${material.idMaterial.nomeMaterial}</p>`;
        tr.appendChild(tdMaterial);

        const tdValidade = document.createElement("td");
        tdValidade.textContent = material.validade;
        tr.appendChild(tdValidade);

        const tdAprovar = document.createElement("td");
        const buttonAprovarSim = document.createElement("button");
        buttonAprovarSim.textContent = "Sim";
        buttonAprovarSim.id = `btn-aprovar-${material.idMaterialUser}`;
        buttonAprovarSim.onclick = () => aprovarMaterial(material.idMaterialUser, true);

        const buttonAprovarNao = document.createElement("button");
        buttonAprovarNao.textContent = "Não";
        buttonAprovarNao.id = `btn-aprovar2-${material.idMaterialUser}`;

        tdAprovar.appendChild(buttonAprovarSim);
        tdAprovar.appendChild(buttonAprovarNao);
        tr.appendChild(tdAprovar);

        tbody.appendChild(tr);
    });
}

async function aprovarMaterial(idMaterialUser, aprovar) {
    try {
        const response = await fetch('http://localhost:8080/api/update/materialuser', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idMaterialUser: idMaterialUser,
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.text();
        alert(`Material ${aprovar ? 'aprovado' : 'rejeitado'} com sucesso!`);
        fetchAllMateriaisUser(); 
    } catch (error) {
        console.error('Erro ao atualizar material:', error);
        alert('Erro ao atualizar material.');
    }
}

document.addEventListener('DOMContentLoaded', fetchAllMateriaisUser);

document.addEventListener('DOMContentLoaded', function () {
    const senhaAdm = getCookie("senhaAdm");
  
    if (senhaAdm !== null && senhaAdm !== "") {
      console.log("Validado:");
    } else {
      alert("Sem autorização");
      console.log("Cookie não encontrado ou está vazio");
      window.location.href = "/src/front/senhaadm/senhaadm.html";
    }
  });
