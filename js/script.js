// Toggle dark/light mode
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load saved theme on start
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// Reveal sections on scroll
const revealSections = document.querySelectorAll(".boxed-section, .hero-section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });
revealSections.forEach(section => observer.observe(section));

// Scroll to top button
const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollTopBtn";
scrollBtn.textContent = "↑";
document.body.appendChild(scrollBtn);
window.onscroll = () => {
  scrollBtn.style.display = (window.scrollY > 300) ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// ParticlesJS init
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
    move: { enable: true, speed: 1.5 }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Typewriter Effect
const typewriter = document.getElementById("typewriter");
const phrases = [
  "Sinh viên Khoa học Máy tính tại Văn Lang",
  "Đam mê trí tuệ nhân tạo và dữ liệu",
  "Yêu thích thiết kế giao diện web hiện đại"
];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;
function loop() {
  typewriter.textContent = currentPhrase.join("");
  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }
  if (isDeleting && j <= phrases[i].length) {
    currentPhrase.pop();
    j--;
  }
  if (j === phrases[i].length) isDeleting = true;
  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }
  setTimeout(loop, isDeleting ? 40 : 100);
}
loop();

// AOS initialization
AOS.init({
  duration: 1000,
  once: true
});

// GitHub Repos Fetcher
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#projects .grid");
  fetch("https://api.github.com/users/gouenji92/repos")
    .then(res => res.json())
    .then(data => {
      data.slice(0, 6).forEach(repo => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>${repo.name}</h3><p>${repo.description || "Không có mô tả."}</p><a href="${repo.html_url}" target="_blank">Xem GitHub</a>`;
        container.appendChild(card);
      });
    });
});

// Language toggle
const langToggle = document.getElementById("lang-toggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const html = document.documentElement;
    const isVI = html.lang === "vi";
    html.lang = isVI ? "en" : "vi";
    location.reload(); // Optional: load translated content dynamically instead
  });
}
