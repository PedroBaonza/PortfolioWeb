document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.id = 'darkmode-toggle';
  btn.textContent = '🌙';
  document.body.prepend(btn);

  const doToggle = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  };

  btn.addEventListener('click', doTgl => doToggle());

  if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
});
