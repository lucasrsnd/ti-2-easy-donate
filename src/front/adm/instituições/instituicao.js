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
  
fetch('http://localhost:8080/inst/instituicoes')
    .then(response => response.json())
    .then(data => {
        const instituicaoList = document.getElementById('instituicao-list');

        instituicaoList.innerHTML = '';

        const table = document.createElement('table');
        table.classList.add('instituicao-table');

        const headerRow = document.createElement('tr');

        const cnpjHeader = document.createElement('th');
        cnpjHeader.textContent = 'CNPJ';

        const nomeHeader = document.createElement('th');
        nomeHeader.textContent = 'Nome';

        const enderecoHeader = document.createElement('th');
        enderecoHeader.textContent = 'Endereço';

        const acaoHeader = document.createElement('th');
        acaoHeader.textContent = 'Ação';

        headerRow.appendChild(cnpjHeader);
        headerRow.appendChild(nomeHeader);
        headerRow.appendChild(enderecoHeader);
        headerRow.appendChild(acaoHeader);

        table.appendChild(headerRow);

        data.forEach(instituicao => {
            const row = document.createElement('tr');

            const cnpjCell = document.createElement('td');
            cnpjCell.textContent = instituicao.cnpj;

            const nomeCell = document.createElement('td');
            nomeCell.textContent = instituicao.nome;

            const enderecoCell = document.createElement('td');
            enderecoCell.textContent = instituicao.rua ? `${instituicao.rua}, ${instituicao.numeroLugar}, ${instituicao.bairro}` : 'Endereço não disponível';

            const acaoCell = document.createElement('td');

            const validarBtn = document.createElement('button');
            validarBtn.textContent = 'Validar';
            validarBtn.classList.add('validar-btn');
            validarBtn.addEventListener('click', () => {
                aprovarInst(instituicao.cnpj);
            });

            const reenviarBtn = document.createElement('button');
            reenviarBtn.textContent = 'Reenviar';
            reenviarBtn.classList.add('reenviar-btn');

            acaoCell.appendChild(validarBtn);
            acaoCell.appendChild(reenviarBtn);
            row.appendChild(cnpjCell);
            row.appendChild(nomeCell);
            row.appendChild(enderecoCell);
            row.appendChild(acaoCell);

            table.appendChild(row);
        });

        instituicaoList.appendChild(table);
    })
    .catch(error => {
        console.error('Erro ao buscar dados das instituições:', error);
    });

async function aprovarInst(cnpj) {
    const response = await fetch('http://localhost:8080/inst/update/aprovacao/', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Accept: "application/json",
        },
        body: JSON.stringify({
            cnpj: cnpj
        }),
    });

    if (response.ok) {
        const responseData = await response.text();
        console.log(responseData);
        alert("Aprovado");
        window.location.reload();
    } else {
        const errorData = await response.text();
        console.error("Error:", errorData);
        alert("Falha na aprovação. Por favor, tente novamente.");
    }
}
