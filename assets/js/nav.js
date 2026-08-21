// Menu na telefonie
(function () {
  var btn = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("mainnav");
  if (!btn || !nav) return;

  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
