/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
  
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        rød: {
          50: "#F8F2F2",
          100: "#F1E5E6",
          200: "#E2CACC",
          300: "#D4B0B3",
          400: "#C49296",
          500: "#B6787D",
          600: "#975357",
          700: "#774045",
          800: "#4F2B2E",
          900: "#281517",
          950: "#140B0C",
        },

        blå: {
          50: "#EEF0F8",
          100: "#DEE5F2",
          200: "#BDCBE5",
          300: "#9EB0D8",
          400: "#7C96CB",
          500: "#5A7BBD",
          600: "#4060A0",
          700: "#304878",
          800: "#1F1050",
          900: "#101828",
          950: "#070B12",
        },

        grøn: {
          50: "#F0F3F1",
          100: "#E3E8E4",
          200: "#C7D0C8",
          300: "#ABB9AD",
          400: "#8E9F8F",
          500: "#738874",
          600: "#5B6B5D",
          700: "#465347",
          800: "#303730",
          900: "#171C18",
          950: "#0C0E0C",
        },

        brun: {
          50: "#FCFAF7",
          100: "#FAF5F1",
          200: "#F5EBE0",
          300: "#F0E0D1",
          400: "#EBD7C2",
          500: "#E5CBB0",
          600: "#D2A575",
          700: "#B87C3D",
          800: "#7B5327",
          900: "#3D2914",
          950: "#1F150B",
        },

        grå: {
          50: "#FDFDFC",
          100: "#F9F8F6",
          200: "#F4F3F0",
          300: "#EEECE6",
          400: "#E9E7E1",
          500: "#E4E0D9",
          600: "#BFB6A6",
          700: "#988B70",
          800: "#685D4A",
          900: "#332D24",
          950: "#1A1814",
        },
      },

      spacing: {
        xxs: "8px",
        xs: "15px",
        s: "30px",
        md: "60px",
        lg: "80px",
        xl: "110px",
        "2xl": "140px",
        "3xl": "180px",
      },

      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        khand: ['"Khand"', "sans-serif"],
      },

      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },

      fontSize: {
        p_desk: ["18px", { lineHeight: "1.75rem" }],
        p_stordesk: ["20px", { lineHeight: "40px" }],
        p_lilledesk: ["16px", { lineHeight: "1.75rem" }],
        h4_desk: ["24px", { lineHeight: "2.25rem" }],
        h3_desk: ["31px", { lineHeight: "3rem" }],
        h2_desk: ["58px", { lineHeight: "3.75rem" }],
        h1_desk: ["96px", { lineHeight: "4.5rem" }],

        p_mobil: ["12px", { lineHeight: "1.50rem" }],
        p_lillemobil: ["10px", { lineHeight: "1.50rem" }],
        p_stormobil: ["14px", { lineHeight: "1.50rem" }],
        h4_mobil: ["14px", { lineHeight: "2.25rem" }],
        h3_mobil: ["17px", { lineHeight: "3rem" }],
        h2_mobil: ["24px", { lineHeight: "" }],
        h1_mobil: ["48px", { lineHeight: "4.5rem" }],
      },

      /* Tilføj dit typografiske hierarki herunder */
      // fontSize: {
      //     base: ['1rem', { lineHeight: '1.5rem' }],
      //     large: ['2.5rem', { lineHeight: '3.75rem' }],
      //   },

      /* Tilføj dit fontvægt-hierarki nedenfor */
      //   fontWeight: {
      //     regular: '400',
      //   },

      /* Borders - borderstørrelser herunder */
      // borderWidth: {
      //     DEFAULT: '1px',
      //     0: '0px',
      //     2: '2px',
      // },

      /* Border radius størrelser herunder */
      // borderRadius: {
      //     DEFAULT: '1.25rem',
      //     none: '0px',
      // },

      /* Box shadows herunder */
      // boxShadow: {
      //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
      // },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
