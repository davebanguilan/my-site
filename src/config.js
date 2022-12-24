module.exports = {
  email: 'davebanguilan.tbd@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/davebanguilan',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/davebanguilan',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dvbngln',
    },
    {
      name: 'Linkedin',
      url: 'https://ph.linkedin.com/in/davebanguilan',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    blueMagenta: '#3c32fa',
    gray: '#E6E6E6',
    white: '#FFFFFF',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
