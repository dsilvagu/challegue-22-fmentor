/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"finter": ["'Inter'", 'sans-serif']
			}
		},
		colors: {
			"psorange": "hsl(35, 77%, 62%)",
			"psred": "hsl(5, 85%, 63%)",
			"poffwhite": "hsl(36, 100%, 99%)",
			"pgblue": "hsl(233, 8%, 79%)",
			"pdgblue": "hsl(236, 13%, 42%)",
			"pbdblue": "hsl(240, 100%, 5%)",
		},
		
		backgroundImage: {
			"menu-open": "url('../src/images/icon-menu.svg')",
			"menu-close": "url('../src/images/icon-menu-close.svg')",

			"hero-desktop": "url('../src/images/image-web-3-desktop.jpg')",
			"hero-mobile": "url('../src/images/image-web-3-mobile.jpg')",
		}
	},
	plugins: [],
}
