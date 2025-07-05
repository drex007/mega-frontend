/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mn': '900px',
      // => @media (min-width: 900px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1930px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-to-t': 'radial-gradient(circle_at_top_left,(var(--tw-gradient-stops))',


      },

      colors: {
        "primary-light-green": '#0DB14B',
        "primary-dark-green": '#0B933C',
        "button-green-black": '#103233 ',
        "primary-grey": "#C1CBB0",
        "primary-transparent": "#2E2E2E",
        "primary-black-text": "#3D3D3D",
        "modal-bg": "#11111190",


      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        spacegrotesk: ["Space Grotesk", "sans-serif"],
        Montserrat: ["Montserrat"],
        Orbitron: ["Orbitron"],
        irish: ["Irish Grover"],
        african: "African",
        neulis: ["Neulis"]

      },
    },
  },
  plugins: [
    require('tailwindcss-motion')
  ],
}