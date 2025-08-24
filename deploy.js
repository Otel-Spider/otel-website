const ghpages = require('gh-pages');
const path = require('path');

console.log('Starting deployment...');

ghpages.publish(path.join(__dirname, 'build'), {
    repo: 'https://github.com/Otel-Spider/otel-website.git',
    branch: 'gh-pages',
    message: 'Deploy to GitHub Pages'
}, (err) => {
    if (err) {
        console.error('Deployment failed:', err);
    } else {
        console.log('Deployment successful!');
        console.log('Your site should be available at: https://otel-spider.github.io/otel-website');
    }
});
