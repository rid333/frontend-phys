import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}, 
				'redUH': {
					100: '#e46e6a',
					200: '#e05651',
					300: '#db3d38',
					400: '#d7251f',
					500: '#d20d06',
					600: '#bd0c05',
					700: '#a80a05',
					800: '#930904',
					900: '#7e0804',
				},
				'darkgreenUH': {
					100: '#6e796f',
					200: '#566257',
					300: '#3d4c3f',
					400: '#253527',
					500: '#0d1f0f',
					600: '#0c1c0e',
					700: '#0a190c',
					800: '#09160b',
					900: '#081309',
				},
				'lightgreenUH': {
					100: '#bcc79d',
					200: '#b1bd8c',
					300: '#a5b47c',
					400: '#9aaa6b',
					500: '#8fa15b',
					600: '#819152',
					700: '#728149',
					800: '#647140',
					900: '#566137',
				},
				'yellowUH': {
					100: '#fbefa9',
					200: '#faed9a',
					300: '#f9ea8c',
					400: '#f9e87d',
					500: '#f8e56f',
					600: '#dfce64',
					700: '#c6b759',
					800: '#aea04e',
					900: '#958943',
				},
				'grayUH': {
					100: '#b8b8bc',
					200: '#acacb1',
					300: '#a1a0a6',
					400: '#95949b',
					500: '#898890',
					600: '#7b7a82',
					700: '#6e6d73',
					800: '#605f65',
					900: '#525256',
				},
				'blueUH': {
					100: '#676686',
					200: '#4d4d72',
					300: '#34335d',
					400: '#1a1a49',
					500: '#010035',
					600: '#010030',
					700: '#01002a',
					800: '#010025',
					900: '#010020',
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: ["Open Sans", "sans-serif"],
			},
		}
	},
};

export default config;
