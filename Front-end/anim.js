document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("menuBtn");
    const menu = document.getElementById("mobileMenu");

    if (!btn) {
        console.error("menuBtn não encontrado no DOM");
        return;
    }
    if (!menu) {
        console.error("mobileMenu não encontrado no DOM");
        return;
    }

    // Toggle (abrir/fechar)
    const toggleMenu = () => {
        btn.classList.toggle("active");
        menu.classList.toggle("show");
        // bloquear scroll quando o menu está aberto
        document.body.style.overflow = menu.classList.contains("show") ? "hidden" : "";
    };

    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // evita que clique no botão "vaze" para o documento
        toggleMenu();
    });

    // Fechar ao clicar em um link do menu (bom para navegação single-page)
    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (menu.classList.contains("show")) toggleMenu();
        });
    });

    // Fechar ao clicar fora do menu (document)
    document.addEventListener("click", (e) => {
        if (!menu.classList.contains("show")) return;
        // se o clique não aconteceu dentro do elemento menu nem no botão -> fechar
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            toggleMenu();
        }
    });

    // Fechar com Esc
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menu.classList.contains("show")) {
            toggleMenu();
        }
    });

    // Opcional: melhorar acessibilidade (aria)
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", () => {
        const expanded = btn.classList.contains("active");
        btn.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
});

// Aguarda o usuário clicar em qualquer lugar da página
document.addEventListener('click', function () {
    const audio = new Audio('ElevenLabs_Text_to_Speech_audio (1).mp3');
    audio.play();
}, { once: true }); // O parâmetro { once: true } garante que toque apenas no primeiro clique

function sendNewsletter() {
    const email = document.getElementById("emailInput").value;
    const msg = document.getElementById("newsletterMsg");

    if (!email.includes("@") || !email.includes(".")) {
        msg.style.color = "red";
        msg.textContent = "Por favor, insira um email válido.";
        return;
    }

    msg.style.color = "green";
    msg.textContent = "Inscrição realizada com sucesso!";

    document.getElementById("emailInput").value = "";

    setTimeout(() => {
        msg.textContent = "";
    }, 3000);
}

const row = document.getElementById("partnersRow");

// Pausar animação no hover
row.addEventListener("mouseenter", () => {
    row.style.animationPlayState = "paused";
});
row.addEventListener("mouseleave", () => {
    row.style.animationPlayState = "running";
});