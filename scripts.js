function dropdown() {
  let links = document.getElementById('links');
  let title = document.getElementById('title');
  let nav = document.querySelector('nav');
  let icon = document.querySelector('.fa');
  if (links.className === 'nav') {
    links.className += ' small';
    title.className = 'hide';
    nav.className = 'long';
    icon.className = 'fa fa-arrow-up';
  } else {
    links.className = 'nav';
    title.className = '';
    nav.className = '';
    icon.className = 'fa fa-bars';
  }
}
