const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

const tabButtons = document.querySelectorAll('[data-project-tab]');
const tabContents = document.querySelectorAll('[data-project-content]');

if (tabButtons.length && tabContents.length) {
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedTab = button.dataset.projectTab;

      tabButtons.forEach((item) => {
        const isSelected = item === button;
        item.classList.toggle('active', isSelected);
        item.setAttribute('aria-selected', String(isSelected));
      });

      tabContents.forEach((content) => {
        const isSelected = content.dataset.projectContent === selectedTab;
        content.classList.toggle('active', isSelected);
        content.hidden = !isSelected;
      });
    });
  });
}

const yearElement = document.querySelector('#current-year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
