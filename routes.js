const routes = require('next-routes')();

routes
    .add('/dashboard', '/dashboard')
    .add('/projects', '/projects')
    .add('/myprojects', '/myProjects')

module.exports = routes;