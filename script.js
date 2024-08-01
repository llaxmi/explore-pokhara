document.addEventListener('DOMContentLoaded', function() {
  const dropdownButton = document.querySelector('.dropdown button');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', function(event) {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });
});