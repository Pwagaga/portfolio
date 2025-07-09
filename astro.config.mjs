import { defineConfig } from 'astro/config';
import 'dotenv/config'

const base = process.env.BASE ?? '/portfolio';

// https://astro.build/config
export default defineConfig({
    site: 'https://pwagaga.github.io',
    base: base,
});
