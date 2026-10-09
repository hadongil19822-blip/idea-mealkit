/** Styles for the existing proposal and FlutterLog detail routes. */
export default {
  content: ['./index.html', './App.tsx', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'Noto Sans KR', 'sans-serif'] },
      colors: { brand: { primary: '#3b82f6', secondary: '#6366f1', accent: '#f43f5e' } },
    },
  },
  plugins: [],
};
