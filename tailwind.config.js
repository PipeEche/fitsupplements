export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F7F7', // o el color que prefieras
        border: '#E0E0E0', // o el color que prefieras
        foreground: '#333333', // o el color que prefieras
        card: "#ffffff", // reemplazá con el color que querés
      
        
      },
      boxShadow:{
        card: '0 2px 10px rgba(0, 0, 0, 0.1)', // o el valor que prefieras
        prima:"0 4px 6px rgba(0, 0, 0, 0.1)", // o el valor que prefieras
      }
    },
  },
  plugins: [],
}
