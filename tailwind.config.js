/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      // 'blue': '#1fb6ff',
      // 'purple': '#7e5bef',
      // 'pink': '#ff49db',
      // 'orange': '#ff7849',
      // 'green': '#13ce66',
      // 'yellow': '#ffc82c',
      // 'gray-dark': '#273444',
      // 'gray': '#8492a6',
      // 'gray-light': '#d3dce6',

         // Light theme colors
         primary: '#6750A4',
         onPrimary: '#FFFFFF',
         primaryContainer: '#E9DDFF',
         onPrimaryContainer: '#22005D',
         secondary: '#625B71',
         onSecondary: '#FFFFFF',
         secondaryContainer: '#E8DEF8',
         onSecondaryContainer: '#1E192B',
         tertiary: '#7E5260',
         onTertiary: '#FFFFFF',
         tertiaryContainer: '#FFD9E3',
         onTertiaryContainer: '#31101D',
         error: '#BA1A1A',
         onError: '#FFFFFF',
         errorContainer: '#FFDAD6',
         onErrorContainer: '#410002',
         background: '#FFFBFF',
         onBackground: '#1C1B1E',
         surface: '#FFFBFF',
         onSurface: '#1C1B1E',
         surfaceVariant: '#E7E0EB',
         onSurfaceVariant: '#49454E',
         outline: '#7A757F',
 
         // Dark theme colors
         darkPrimary: '#CFBCFF',
         darkOnPrimary: '#381E72',
         darkPrimaryContainer: '#4F378A',
         darkOnPrimaryContainer: '#E9DDFF',
         darkSecondary: '#CBC2DB',
         darkOnSecondary: '#332D41',
         darkSecondaryContainer: '#4A4458',
         darkOnSecondaryContainer: '#E8DEF8',
         darkTertiary: '#EFB8C8',
         darkOnTertiary: '#4A2532',
         darkTertiaryContainer: '#633B48',
         darkOnTertiaryContainer: '#FFD9E3',
         darkError: '#FFB4AB',
         darkOnError: '#690005',
         darkErrorContainer: '#93000A',
         darkOnErrorContainer: '#FFDAD6',
         darkBackground: '#1C1B1E',
         darkOnBackground: '#E6E1E6',
         darkSurface: '#1C1B1E',
         darkOnSurface: '#E6E1E6',
         darkSurfaceVariant: '#49454E',
         darkOnSurfaceVariant: '#CAC4CF',
         darkOutline: '#948F99',
    },
    extend: {},
  },
  plugins: [],
}

