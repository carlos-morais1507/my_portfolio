/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
        violet1: '#fdfcfe',
        violet2: '#fbfaff',
        violet3: '#f5f2ff',
        violet4: '#ede9fe',
        violet5: '#e4defc',
        violet6: '#d7cff9',
        violet7: '#c4b8f3',
        violet8: '#aa99ec',
        violet9: '#6e56cf',
        violet10: '#644fc1',
        violet11: '#5746af',
        violet12: '#20134b',
        mauve1: '#fdfcfd',
        mauve2: '#f9f8f9',
        mauve3: '#f4f2f4',
        mauve4: '#eeedef',
        mauve5: '#e9e8ea',
        mauve6: '#e4e2e4',
        mauve7: '#dcdbdd',
        mauve8: '#c8c7cb',
        mauve9: '#908e96',
        mauve10: '#86848d',
        mauve11: '#6f6e77',
        mauve12: '#1a1523',
    },
    fontSize: {
      h1: '44px',
      h2: '36px',
      h3: '28px',
      h4: '20px',
      text: '16px',
      btn: '14px',
      titles: '128px',
    },
    extend: {
      animation: {
        'spin-slow' : 'spin 10s linear infinite',
      },
      backgroundImage: {
        'carlos-photo' : "url('https://avatars.githubusercontent.com/u/105527392?v=4')"
      }
    }
  },
  plugins: [],
}
