// Function to toggle between themes
document.getElementById('toggle').addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
});
