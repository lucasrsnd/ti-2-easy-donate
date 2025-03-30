// VERIFICAÇÂO DOS COOKIES
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

  // INDICADORES

  function mediaTempAprovacaoDoador(){

  }


  
  function idadeMediaDoador(){
    
  }

  function taxaCriacaoDoador(){
    
  }

  function mediaTempAprovacaoInst(){
    
  }

  function taxaErrosCadastroInst(){
    
  }

  function materialMaisNecessitado(){

  }

  function mediaTempAprovacaoMaterial(){

  }

  function mediaMateriaisCadastrados(){

  }

  function materialMaisCadastrado(){

  }

  function modeDoacaoMaisUtilizado(){

  }

  function mediaDoacaoMes(){

  }

  function mediaDoacoesUsuarios(){

  }