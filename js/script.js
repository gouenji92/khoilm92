// Hiệu ứng AOS nâng cao
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out',
});

// Toggle Dark/Light Mode
function toggleTheme() {
  document.body.classList.toggle('dark');
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);

  const icon = document.querySelector('.theme-toggle i');
  icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Khôi phục theme khi tải lại trang
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    document.querySelector('.theme-toggle i').className = 'fas fa-sun';
  }
});

// Toggle Ngôn ngữ (placeholder: mở rộng bằng JSON hoặc local text swapping)
function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'vi' ? 'en' : 'vi';
  document.documentElement.lang = newLang;

  const alertMsg = newLang === 'vi' 
    ? 'Đã chuyển sang Tiếng Việt.\n(Tính năng đa ngôn ngữ đang được hoàn thiện)' 
    : 'Switched to English.\n(Multilingual support is under development)';

  alert(alertMsg);
}

// Highlight liên kết nav theo cuộn trang
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 120;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Typewriter hiệu ứng mở rộng
function typeWriter(text, elementId, speed = 45, loop = false) {
  let i = 0;
  const element = document.getElementById(elementId);
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (loop) {
      setTimeout(() => {
        element.innerHTML = '';
        i = 0;
        type();
      }, 2000);
    }
  }
  type();
}

window.addEventListener('load', () => {
  if (document.getElementById('typewriter')) {
    typeWriter('Xin chào! Tôi là Lê Minh Khôi', 'typewriter', 60, true);
  }
});

// Hiệu ứng hiện nút scroll to top
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scrollTopBtn';
scrollBtn.innerHTML = '⬆️';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// Ripple effect cho button
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    this.appendChild(circle);

    const d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';
    const rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left - d / 2 + 'px';
    circle.style.top = e.clientY - rect.top - d / 2 + 'px';

    setTimeout(() => circle.remove(), 600);
  });
});
