const { Footer } = require('antd/es/layout/layout');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "footer-bg":'var(--thm-black) url(/public/Images/footer-bg.png) center top no-repeat;',
          ContactImg:"linear-gradient(rgba(39,38,29,0.7),rgba(39,38,29,0.7)),url(/Images/Base/bgContactImg.png)",
      },
      colors:{
        thmBlack:"var(--thm-black)",
        thmText:"var(--thm-text)",
        thmBase:"var(--thm-base)",
        "dark-cl":"var(--thm-black)",
        "mainRed":"var(--thm-base)",
        "goldLight":"var(--thm-base)"
      },
      fontFamily:{
        thmFont:"var(--thm-font)",
        inter:"var(--inter-font)",
        oswald:'var(--oswald-font)',
        Roboto:"var(--thm-font)",
        poppins:"var(--inter-font)"
      },
      boxShadow:{
        headerShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
        iconShadow:"0 0 12px 1px #00a82d",
        boxshadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      }
    },
  },
  plugins: [],
};
