// Hiệu ứng AOS
AOS.init();

// Toggle Dark/Light Mode
function toggleTheme() {
  document.body.classList.toggle('dark');
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
}

// Khôi phục theme khi tải lại trang
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});

// Toggle Ngôn ngữ (placeholder: bạn có thể mở rộng bằng JSON ngôn ngữ)
function toggleLanguage() {
  const lang = document.documentElement.lang === 'vi' ? 'en' : 'vi';
  document.documentElement.lang = lang;
  alert('Chuyển ngôn ngữ sang: ' + (lang === 'vi' ? 'Tiếng Việt' : 'English') + '\n(Tính năng đang được phát triển)');
}

// Scroll to top khi click logo (nếu cần)
// document.querySelector('.logo').addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });
