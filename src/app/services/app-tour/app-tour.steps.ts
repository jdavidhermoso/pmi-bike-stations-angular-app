const nextButton = {
  classes: 'shepherd-button-primary',
  text: 'Next',
  type: 'next'
};
const backButton = {
  classes: 'shepherd-button-secondary',
  text: 'Back',
  type: 'back'
};
const cancelButton = {
  classes: 'shepherd-button-secondary',
  text: 'Exit',
  type: 'cancel'
};
const intro = {
  id: 'intro',
  buttons: [
    cancelButton,
    nextButton
  ],
  cancelIcon: {
    enabled: true
  },
  highlightClass: 'highlight',
  scrollTo: false,
  title: 'Carril Bici Palma',
  text: ['Carril Bici Palma pretende ayudar a saber donde alquilar una bici, y por donde transcurre el carril bici para hacer que sea mas facil y accesible reducir el uso del coche.'],
  when: {
    show: () => {
      console.log('show step');
    },
    hide: () => {
      console.log('hide step');
    }
  }
};
const menu = {
  id: 'menu',
  attachTo: {
    element: '#side-nav-toggler',
    on: 'bottom'
  },
  buttons: [
    backButton,
    nextButton
  ],
  cancelIcon: {
    enabled: true
  },
  highlightClass: 'highlight',
  scrollTo: false,
  title: 'Carril Bici Palma',
  text: ['Click the side button to open the menu and navigate between app pages.'],
  when: {
    show: () => {

    },
    hide: () => {
      console.log('hide step');
    }
  }
};

export const appTourSteps = [
  intro,
  menu
];
