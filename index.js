const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    '.fade-in': {
      'animation': 'fadeIn 3s ease-in-out forwards',
    },
    '.fade-out': {
      'animation': 'fadeOut 3s ease-in-out forwards',
    },
    '.slide-in': {
      'animation': 'slideIn 3s ease-in-out forwards',
    },
    '.slide-out': {
      'animation': 'slideOut 3s ease-in-out forwards',
    },
    '@keyframes fadeIn': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' }
    },
    '@keyframes fadeOut': {
      '0%': { opacity: '1' },
      '100%': { opacity: '0' }
    },
    '@keyframes slideIn': {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(0)' }
    },
    '@keyframes slideOut': {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(100%)' }
    },
  }, {
    variants: ['responsive'],
  });
});
