function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  }
  function setCookie(nome, valor, horas, caminho) {
    let cookieString = `${encodeURIComponent(nome)}=${encodeURIComponent(valor)}`;

    if (horas) {
        const dataExpiracao = new Date();
        dataExpiracao.setTime(dataExpiracao.getTime() + (horas * 60 * 60 * 1000));
        cookieString += `; expires=${dataExpiracao.toUTCString()}`;
    }

    cookieString += `; Path=${caminho}`;

    document.cookie = cookieString;
}

function apagarCookie(nome) {
  document.cookie = `${nome}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}