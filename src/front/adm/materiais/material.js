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

// MANDAR MATERIAL
async function mandarMaterial() {
    let name = document.getElementById("nomemat").value;

    if (name === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const response = await fetch("http://localhost:8080/api/insert/materiais", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Accept: "application/json",
        },
        body: JSON.stringify({
            nomeMaterial: name,
        }),
    });

    if (response.ok) {
        const responseData = await response.text();
        console.log(responseData);
        alert("Cadastro realizado com sucesso!");
        window.location.reload();
    } else {
        const errorData = await response.text();
        console.error("Error:", errorData);
        alert("Falha no cadastro. Por favor, tente novamente.");
    }
}


fetch("http://localhost:8080/api/materiais").then(response => response.json()).then(data => {
    const materialList = document.getElementById('material-list');
    materialList.innerHTML = '';

    data.forEach(material => {
        const listItem = document.createElement('li');
        listItem.className = 'completed';
        listItem.innerHTML = `
        <div class="task-title">
            <i class="bx bx-check-circle"></i>
            <p>${material.nomeMaterial}</p>
        </div>
        <i class="bx bx-dots-vertical-rounded"></i>
    `;
        materialList.appendChild(listItem);
    });
}).catch(error => {
    console.error('Erro ao buscar dados das instituições:', error);
});

