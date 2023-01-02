let checkPassword = function () {
  if (document.getElementById('password').value == document.getElementById('confirm-password').value) {
    document.querySelector('.confirm-message').style.color = 'var(--success-color)';
    document.querySelector('.confirm-message').textContent = 'Matching';
  } else {
    document.querySelector('.confirm-message').style.color = 'var(--failure-color)';
    document.querySelector('.confirm-message').textContent = 'Not Matching';
  }
};
