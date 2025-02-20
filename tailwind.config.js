// /** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: "class",
//   theme: {
//     container: {
//       center: true,
//       padding: "1rem",
//     },

//     screens: {
//       xs: "450px",
//       // => @media (min-width: 450px) { ... }

//       sm: "575px",
//       // => @media (min-width: 576px) { ... }

//       md: "768px",
//       // => @media (min-width: 768px) { ... }

//       lg: "992px",
//       // => @media (min-width: 992px) { ... }

//       xl: "1200px",
//       // => @media (min-width: 1200px) { ... }

//       "2xl": "1400px",
//       // => @media (min-width: 1400px) { ... }
//     },
//     extend: {
//       textShadow: {
//         'custom': '2px 2px 4px rgba(0,0,0,0.5)',
//         // Define more custom shadows as needed
//       },
//       colors: {
//         current: "currentColor",
//         transparent: "transparent",
//         white: "#FFFFFF",
//         black: "#121723",
//         dark: "#1D2430",
//         primary: "#4A6CF7",
//         yellow: "#FBB040",
//         "bg-color-dark": "#171C28",
//         "body-color": {
//           DEFAULT: "#788293",
//           dark: "#959CB1",
//         },
//         stroke: {
//           stroke: "#E3E8EF",
//           dark: "#353943",
//         },
//         gray: {
//           ...colors.gray,
//           dark: "#1E232E",
//           light: "#F0F2F9",
//         },
//       },

//       boxShadow: {
//         signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
//         one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
//         two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
//         three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
//         sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
//         "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
//         "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
//         submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
//         "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
//         btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
//         "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
//         "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
//       },
//       dropShadow: {
//         three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      textShadow: {
        'default': '1px 1px 2px rgba(0, 0, 0, 0.3)',
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'xl': '3px 3px 6px rgba(0, 0, 0, 0.8)',
        'blue': '12px 12px 14px rgba(10, 50, 255, 0.5)', // Add your blue text shadow here
        // Add more custom text shadows as needed
      }, animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        dark: "#1D2430",
        light: "#1D8670",
        primary: "#4A6CF7", 
        newDark:"#01141a",
        yellow: "#FBB040",
        green: "#04bf07",
        new:"#e5e7eb",
        "bg-color-dark": "#171C28",
        "bg-color-black": "#000000",
        "body-color": {
          DEFAULT: "#788293",
          dark: "#959CB1",
          black: "#000000",
        },
        stroke: {
          stroke: "#E3E8EF",
          dark: "#353943",
        },
        gray: {
          ...colors.gray,
          dark: "#1E232E",
          light: "#F0F2F9",
        },
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "15px 15px 10px rgba(6, 5, 5, 0.6)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        four: "15px 15px 48px rgba(180, 180, 383, 0.2)",
        five: "7px 4px 20px rgba(180, 180, 383, 0.2)",
        six: "12px 12px 20px rgba(180, 180, 383, 0.3)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },
    },
    keyframes: {
      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
      "marquee-vertical": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(calc(-100% - var(--gap)))" },
      },
    },
  },
  plugins: [],
};
