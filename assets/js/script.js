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

// Abas internas da página Sobre mim
const aboutTabButtons = document.querySelectorAll('[data-about-tab]');
const aboutTabContents = document.querySelectorAll('[data-about-content]');

if (aboutTabButtons.length && aboutTabContents.length) {
  aboutTabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedTab = button.dataset.aboutTab;

      aboutTabButtons.forEach((item) => {
        const isSelected = item === button;
        item.classList.toggle('active', isSelected);
        item.setAttribute('aria-selected', String(isSelected));
      });

      aboutTabContents.forEach((content) => {
        const isSelected = content.dataset.aboutContent === selectedTab;
        content.classList.toggle('active', isSelected);
        content.hidden = !isSelected;
      });
    });
  });
}

// Linha do tempo profissional interativa
const careerButtons = document.querySelectorAll('[data-career]');
const careerDetails = document.querySelectorAll('[data-career-detail]');

if (careerButtons.length && careerDetails.length) {
  careerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedCareer = button.dataset.career;

      careerButtons.forEach((item) => {
        const isSelected = item === button;
        item.classList.toggle('active', isSelected);
        item.setAttribute('aria-pressed', String(isSelected));
      });

      careerDetails.forEach((detail) => {
        const isSelected = detail.dataset.careerDetail === selectedCareer;
        detail.classList.toggle('active', isSelected);
        detail.hidden = !isSelected;
      });
    });
  });
}

// Ampliação das imagens dos certificados
const certificateModal = document.querySelector('#certificate-modal');
const certificateModalImage = certificateModal?.querySelector('img');
const certificateModalClose = certificateModal?.querySelector('.certificate-modal-close');
const certificateImages = document.querySelectorAll('.certificate-image img');

const closeCertificateModal = () => {
  if (!certificateModal || !certificateModalImage) return;
  certificateModal.classList.remove('open');
  certificateModal.setAttribute('aria-hidden', 'true');
  certificateModalImage.src = '';
  document.body.style.overflow = '';
};

certificateImages.forEach((image) => {
  image.closest('button')?.addEventListener('click', () => {
    if (!certificateModal || !certificateModalImage) return;
    certificateModalImage.src = image.src;
    certificateModalImage.alt = image.alt;
    certificateModal.classList.add('open');
    certificateModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

certificateModalClose?.addEventListener('click', closeCertificateModal);
certificateModal?.addEventListener('click', (event) => {
  if (event.target === certificateModal) closeCertificateModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeCertificateModal();
});
