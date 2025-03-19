function loginAsAdmin() {
let senha = document.getElementById('SenhaAdm').value;

  if (senha === 'easydonate') {
    document.cookie = `senhaAdm=${senha}; path=/`;
    window.location.href = '/src/front/adm/painel/painel.html';
  } else {
    alert('Senha de administrador incorreta.');
  }
}

