const routes = require('next-routes')();

routes
    .add('/dashboard', '/dashboard')
    .add('/projects', '/projects')
    .add('/myprojects', '/myProjects')
    .add('/projects/create', 'projects/create')

module.exports = routes;