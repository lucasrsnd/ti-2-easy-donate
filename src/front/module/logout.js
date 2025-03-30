export default function logout() {
  document.querySelector(".Btn").addEventListener("click", function () {
    window.location.href = "/src/front/homepage/index.html";

    const cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {
      const equalsPos = cookie.indexOf("=");
      const name = equalsPos > -1 ? cookie.substr(0, equalsPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    });
  });
}
