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

fetch('http://localhost:8080/api/doadores')
    .then(response => response.json())
    .then(doadores => {
        const doadoresList = document.getElementById('doadores-list');
        doadores.forEach(doador => {
            const doadorDiv = document.createElement('div');
            doadorDiv.classList.add('doador');
            doadorDiv.innerHTML = `
                <p><strong>CPF:</strong> ${doador.cpf}</p>
                <p><strong>Nome:</strong> ${doador.nome}</p>
                <p><strong>Email:</strong> ${doador.email}</p>
                <p><strong>Telefone:</strong> ${doador.telefone}</p>
                <p><strong>Nascimento:</strong> ${doador.nascimento}</p>
                <p><strong>Criacao da Conta:</strong> ${doador.criacaoDaConta}</p>
                <p><strong>Aprovação: </strong> ${doador.aprovacao}</p>
                <button onclick="aprovarDoador('${doador.cpf}')">Aprovar</button>
                <button onclick="excluirDoador('${doador.cpf}')">Excluir</button>
            `;
            doadoresList.appendChild(doadorDiv);
        });
    })
    .catch(error => console.error('Erro ao obter doadores:', error));

async function aprovarDoador(cpf) {
    const response = await fetch('http://localhost:8080/api/update/doador', {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify({
          cpf: cpf
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
    console.log('Doador aprovado:', cpf);
}

async function excluirDoador(cpf) {
    const response = await fetch('http://localhost:8080/api/delete/doador', {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify({
          cpf: cpf
        }),
      });
      
      if (response.ok) {
        const responseData = await response.text();
        console.log(responseData); 
        alert("Deletado");
        window.location.reload();
      } else {
        const errorData = await response.text();
        console.error("Error:", errorData);
        alert("Falha ao deletar. Por favor, tente novamente.");
      }
    console.log('Doador excluído:', cpf);
}

