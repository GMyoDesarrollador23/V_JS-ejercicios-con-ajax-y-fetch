/* **********     Curso JavaScript: 123. Ejercicios AJAX - APIs: Incluir archivos HTML (include-html.js) - #jonmircha     ********** */

document.addEventListener("DOMContentLoaded", () => {
  const includeHtml = (el, url) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        el.outerHTML = xhr.responseText;
      } else {
        let message = xhr.statusText || "Error al cargar el archivo ";
        el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
      }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
  };

  const nodos = document.querySelectorAll("[data-include]");

  nodos.forEach((el) => {
    includeHtml(el, el.getAttribute("data-include"));
  });
});
