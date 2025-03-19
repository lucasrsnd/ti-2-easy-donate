document.addEventListener('DOMContentLoaded', function() {
    const materialExpandElements = document.querySelectorAll('.material-expand');

    materialExpandElements.forEach(element => {
        element.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});

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