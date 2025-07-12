import { defineConfig } from 'astro/config';
// import netlify from '@astrojs/netlify/functions';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    // output: 'server',
    // adapter: netlify(),
    i18n: {
        defaultLocale: 'pl',
        locales: ['en', 'pl'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    server: {
        allowedHosts: true,
    },
    site: 'https://wyprawa.robocza.org',
    redirects: {
        '/polityka-prywatnosci': '/polityka-prywatnosci.pdf',
        '/regulamin': '/regulamin.pdf',
        '/platnosc': 'https://buy.stripe.com/4gw15z6CCaamcyQeUV',
    },
    vite: {
        plugins: [tailwindcss()],
        server: {
            watch: {
                ignored: ['**/.idea/workspace.xml', '**/.idea/workspace.xml.tmp'],
            },
        },
    },
});
