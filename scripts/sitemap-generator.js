import sitemap from 'react-router-sitemap';

// Define your routes for sitemap generation
const routes = [
    { path: '/' },
    { path: '/find-lawyer' },
    { path: '/lawyer/:id' },
    { path: '/help-center' },
    { path: '/login' },
    { path: '/register' },
];

function generateSitemap() {
    return (
        new sitemap(routes)
            .build('https://legalconnect-advocate.vercel.app') // Base URL
            .save('./public/sitemap.xml')
    );
}

generateSitemap();
console.log('Sitemap generated successfully!');
