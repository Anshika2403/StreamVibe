/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black-nav':"#0F0F0F",
        'nav-bor':"#1F1F1F",
        'grey-foot':"#999999",
        'fbox':"#1A1A1A",
        'fbor':"#262626",
        'pgray':'#999999',
        'butred':'#E50000',
        'black-box':'#141414',
        'slide':'#333333',
      },
      rotate:{
        '360':'360deg'
      },
      transitionDuration:{
        '2000':'2000ms'
      },
      backgroundImage:{
        'gradient-red':'linear-gradient(90deg, rgba(15, 15, 15, 1) 2%, rgba(20, 15, 15, 0.9) 16%, rgba(34, 14, 14, 0.9) 28%, rgba(229, 0, 0, 0.1) 100%)'
      }
    },
  },
  plugins: [],
}

