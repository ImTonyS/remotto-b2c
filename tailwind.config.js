/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Colores principales de marca
        primary: {
          50: "#faf5ff", // Más claro
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#9928fd", // Tu color principal morado
          600: "#7e22ce",
          700: "#6b21a8",
          800: "#581c87",
          900: "#3b0764",
          950: "#01103f", // Tu color más oscuro
        },

        // Gradiente de accent (magenta/fucsia)
        accent: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#e300f7", // Tu color magenta
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
          950: "#4a044e",
        },

        // Azul eléctrico
        electric: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#0800ff", // Tu color azul
          700: "#0600cc",
          800: "#0500aa",
          900: "#040088",
          950: "#020044",
        },

        // Colores semánticos
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e", // Verde éxito
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },

        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // Amarillo advertencia
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },

        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444", // Rojo error
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },

        info: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // Azul información
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },

        // Grises neutros con tinte morado
        neutral: {
          50: "#faf9fb",
          100: "#f4f3f7",
          200: "#e8e6ed",
          300: "#d4d1dc",
          400: "#a9a5b8",
          500: "#7e7991",
          600: "#605c70",
          700: "#4b475a",
          800: "#3a3747",
          900: "#2e2b3a",
          950: "#01103f", // Tu color base oscuro
        },

        // Colores de fondo
        background: {
          DEFAULT: "#ffffff",
          secondary: "#faf9fb",
          tertiary: "#f4f3f7",
          dark: "#01103f",
        },

        // Colores de texto
        foreground: {
          DEFAULT: "#01103f",
          secondary: "#4b475a",
          tertiary: "#7e7991",
          inverse: "#ffffff",
        },

        // Colores de borde
        border: {
          DEFAULT: "#e8e6ed",
          secondary: "#d4d1dc",
          tertiary: "#a9a5b8",
        },
      },

      // Gradientes personalizados
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #e300f7 0%, #9928fd 50%, #0800ff 100%)",
        "gradient-dark": "linear-gradient(135deg, #01103f 0%, #0800ff 100%)",
        "gradient-vibrant": "linear-gradient(90deg, #e300f7 0%, #0800ff 100%)",
        "gradient-subtle": "linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 100%)",
      },

      // Sombras con colores de marca
      boxShadow: {
        primary: "0 10px 40px -10px rgba(153, 40, 253, 0.3)",
        accent: "0 10px 40px -10px rgba(227, 0, 247, 0.3)",
        electric: "0 10px 40px -10px rgba(8, 0, 255, 0.3)",
        glow: "0 0 30px rgba(153, 40, 253, 0.5)",
      },

      // Animaciones
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-shift": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shift": "gradient-shift 5s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
