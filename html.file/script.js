function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const error = document.getElementById('loginError');

  if (username === '' || password === '') {
    error.textContent = 'Please enter both username and password.';
    return;
  }

  // Dummy check – accept any non-empty username/password for demo
  if (username && password) {
    error.textContent = '';
    showLogoPage();
  } else {
    error.textContent = 'Invalid username or password.';
  }
}

function showLogoPage() {
  document.getElementById('loginPage').classList.remove('active');
  document.getElementById('logoPage').classList.add('active');

  // Show logo page for 3 seconds then show collection
  setTimeout(() => {
    document.getElementById('logoPage').classList.remove('active');
    document.getElementById('collectionPage').classList.add('active');
  }, 3000);
}
