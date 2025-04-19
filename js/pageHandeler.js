const buttons = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('.page');

const buttonToPage = {
  'btn-all': 'page-all',
  'btn-music': 'page-music',
  'btn-comedy': 'page-comedy',
  'btn-drawing': 'page-drawing',
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Change button styles
    buttons.forEach(btn => {
      btn.classList.remove('bg-red-500');
      btn.classList.add('bg-gray-400');
    });
    button.classList.remove('bg-gray-400');
    button.classList.add('bg-red-500');

    // Show the correct page, hide others
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(buttonToPage[button.id]).classList.remove('hidden');
  });
});

  