window.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(html => document.body.insertAdjacentHTML("afterbegin", html));

  fetch("footer.html")
    .then(res => res.text())
    .then(html => document.body.insertAdjacentHTML("beforeend", html));
});