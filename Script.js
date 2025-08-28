// === LOADER FUTURISTA ===
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("fade-out");
    setTimeout(() => loader.style.display = "none", 800);
  }
});

// === ANIMAÇÃO DE ENTRADA (Fade + Slide com delay) ===
const animarEntrada = () => {
  const elementos = document.querySelectorAll(".animar-scroll");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visivel");
        }, i * 200); // Delay progressivo
      }
    });
  }, { threshold: 0.2 });

  elementos.forEach(el => observer.observe(el));
};
animarEntrada();

// === PARALLAX 3D COM BRILHO DINÂMICO ===
document.querySelectorAll(".produto").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotX = (y - rect.height / 2) / 20;
    const rotY = -(x - rect.width / 2) / 20;

    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.05)`;
    card.style.boxShadow = `${-(x - rect.width / 2) / 10}px ${(y - rect.height / 2) / 10}px 40px #00f0ff`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.boxShadow = "none";
  });
});

// === FILTRO COM ANIMAÇÃO ===
const botoesFiltro = document.querySelectorAll("[data-filter]");
botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    const categoria = botao.getAttribute("data-filter");
    document.querySelectorAll(".produto").forEach(prod => {
      prod.classList.add("fade-out");
      setTimeout(() => {
        if (categoria === "todos" || prod.classList.contains(categoria)) {
          prod.style.display = "block";
          setTimeout(() => prod.classList.remove("fade-out"), 50);
        } else {
          prod.style.display = "none";
        }
      }, 300);
    });

    botoesFiltro.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");
  });
});

// === SCROLL SUAVE COM OFFSET ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute("href"));
    const headerOffset = 70;
    const offsetTop = alvo.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  });
});

// === BOTÃO WHATSAPP FIXO COM ANIMAÇÃO ===
const btnWhatsApp = document.createElement("a");
btnWhatsApp.href = "https://wa.me/258840000000"; // Colocar número real
btnWhatsApp.target = "_blank";
btnWhatsApp.className = "btn-whatsapp";
btnWhatsApp.innerHTML = "💬";
document.body.appendChild(btnWhatsApp);

// Efeito pulsar
setInterval(() => {
  btnWhatsApp.classList.toggle("pulse");
}, 1500);

// === DARK MODE FUTURISTA ===
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};
document.addEventListener("keydown", (e) => {
  if (e.key === "d") toggleDarkMode();
});