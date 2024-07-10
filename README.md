# Tailwind CSS Animations Plugin

A Tailwind CSS plugin for adding custom animations like fade-in, fade-out, slide-in, and slide-out with support for different iteration counts.

## Installation

Install the plugin via npm:

```sh
npm install tailwindcss-animations-plugin
```

## Usage

Add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animations-plugin')
  ],
}
```

## Available Classes

### Animation Classes

- `fade-in`
- `fade-out`
- `slide-in`
- `slide-out`


## Examples

### Basic Usage

```html
<div class="fade-in">This will fade in</div>
<div class="fade-out">This will fade out</div>
<div class="slide-in">This will slide in</div>
<div class="slide-out">This will slide out</div>
```

## Customization

To customize the animations, you can modify the plugin code in `index.js` as needed. The current implementation includes keyframes for `fadeIn`, `fadeOut`, `slideIn`, and `slideOut` animations.

### Example Customization

If you want to add more animations or modify existing ones, you can edit the `index.js` file:

```javascript
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const iterations = {
    '1': '1',
    '2': '2',
    '3': '3',
    'infinite': 'infinite',
  };

  const utilities = {};

  Object.entries(iterations).forEach(([key, value]) => {
    utilities[`.fade-in-${key}`] = {
      'animation': `fadeIn 3s ease-in-out ${value} forwards`,
    };
    utilities[`.fade-out-${key}`] = {
      'animation': `fadeOut 3s ease-in-out ${value} forwards`,
    };
    utilities[`.slide-in-${key}`] = {
      'animation': `slideIn 3s ease-in-out ${value} forwards`,
    };
    utilities[`.slide-out-${key}`] = {
      'animation': `slideOut 3s ease-in-out ${value} forwards`,
    };
  });

  addUtilities({
    ...utilities,
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
```

## Contributing

If you find a bug or have a suggestion for improvement, feel free to open an issue or create a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
