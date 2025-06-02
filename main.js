window.addEventListener("DOMContentLoaded", () => {
  fetch("include/header.html")
    .then(res => res.text())
    .then(html => document.body.insertAdjacentHTML("afterbegin", html));

  fetch("include/footer/footer.html")
    .then(res => res.text())
    .then(html => document.body.insertAdjacentHTML("beforeend", html));
});

function particles(rootDir){
  $.ajax({
      url: rootDir + "include/particles/particles.html", // ディレクトリー変更
      cache: false,
      async: false,
      dataType: 'html',
      success: function(html){
          html = html.replace(/\{\$root\}/g, rootDir); 
          document.write(html);
      }
  });
}