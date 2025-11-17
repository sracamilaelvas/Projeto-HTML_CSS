document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const icon = toggle.querySelector("i");

  function updateIcon() {
    if (document.body.classList.contains("light-mode")) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    updateIcon();
  });

  updateIcon();

  const form = document.querySelector("form");
  if (form && location.pathname.includes("cadastro")) {
    form.addEventListener("submit", (e) => {
      const senha = form.querySelector("#senha").value;
      const confirmar = form.querySelector("#confirmar-senha").value;

      if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        e.preventDefault();
        return;
      }

      if (senha !== confirmar) {
        alert("As senhas não coincidem.");
        e.preventDefault();
      }
    });
  }
});
