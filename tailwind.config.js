/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'black':'#211A1E',
      'company-color':'#211A1E',
      'best-seller-box':'#FDE74C',
      'best-seller-text':'#8F8135',
      'star-yellow':'#e59819',
      'highest-rated':'#FF6B35',
      'white':'#ffffff',
      'blue':'#5d75fc',
      'greyinput':'#f7fafa',
      'textGrey':'#8b7173',
      'category-color':"#cec0fc",
      'offer-ends-color':'#b93d22'
        },
    fontFamily:{
      Gugi: ['Gugi', "cursive",],
      Roboto: ['Roboto', "sans-serif"]
    },
    extend: {
      backgroundImage:{
        'car1':"url('https://res.cloudinary.com/naveencloudinary/image/upload/v1670415478/car1_jqrgbm.jpg')",
        'car2':"url('https://res.cloudinary.com/naveencloudinary/image/upload/v1670415505/car2_zqj4zj.jpg')"
      }
    },
  },
  plugins: [],
}
