// Nút dark mode
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
};

// Scroll reveal hiệu ứng section
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
