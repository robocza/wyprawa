import { defineConfig } from "astro/config";
// import netlify from '@astrojs/netlify/functions';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    // output: 'server',
    // adapter: netlify(),
    server: {
        host: true,
        port: 3000
    },
    site: "https://wyprawa.robocza.org",
    integrations: [
        tailwind(),
    ],
    redirects: {
        '/polityka-prywatnosci': '/polityka-prywatnosci.pdf',
        '/regulamin': '/regulamin.pdf',
        '/platnosc': 'https://buy.stripe.com/4gw15z6CCaamcyQeUV',
        '/kup-plakat': 'https://buy.stripe.com/00gaG92mm6Ya8iAfZ2',
        '/kup-plakat-z-robalem': 'https://buy.stripe.com/5kA8y10ee96igP6bIN',
    },
    vite: {
        server: {
            watch: {
                ignored: ['**/.idea/workspace.xml', '.idea/workspace.xml.tmp']
            }
        }
    }
});
