// TelemetryOS Theme Toggle - Shared JavaScript
// Include this file at the end of <body> in your HTML pages

(function() {
  // Initialize theme
  let currentTheme = 'dark';
  document.body.className = 'dark-theme';

  // Get elements
  const themeToggle = document.getElementById('theme-toggle-nav');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');

  if (!themeToggle || !themeIcon || !themeText) {
    console.warn('Theme toggle elements not found');
    return;
  }

  // Toggle theme function
  function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.className = `${currentTheme}-theme`;

    if (currentTheme === 'dark') {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Light';
    } else {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Dark';
    }

    // Save preference to localStorage
    localStorage.setItem('telemetryos-theme', currentTheme);
  }

  // Load saved theme preference
  const savedTheme = localStorage.getItem('telemetryos-theme');
  if (savedTheme && savedTheme !== currentTheme) {
    toggleTheme();
  }

  // Add event listener
  themeToggle.addEventListener('click', toggleTheme);
})();
