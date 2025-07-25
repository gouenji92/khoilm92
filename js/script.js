// Toggle dark mode
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
};

// Scroll reveal
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Back to top
const backToTop = document.getElementById("back-to-top");
backToTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
