document.addEventListener("DOMContentLoaded", () => {

  const profiles = document.querySelectorAll(".profile");

  profiles.forEach(profile => {
    profile.addEventListener("click", () => {

      const user = profile.dataset.user;

      const imgSrc = profile.querySelector('img').src;




      localStorage.setItem("perfilAtivoNome", user);



      localStorage.setItem("perfilAtivoImagem", imgSrc);
    });
  });
});


const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');


const setTheme = (theme) => {
  if (theme === 'light') {
    root.classList.add('light-mode');
    themeToggle.innerHTML = '☀️';
    themeToggle.setAttribute('aria-label', 'Ativar modo escuro');
  } else {
    root.classList.remove('light-mode');
    themeToggle.innerHTML = '🌙';
    themeToggle.setAttribute('aria-label', 'Ativar modo claro');
  }

  localStorage.setItem('theme', theme);
};

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = root.classList.contains('light-mode') ? 'dark' : 'light';
  setTheme(nextTheme);
});

