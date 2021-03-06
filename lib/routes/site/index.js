
/**
 * Non-api related routes
 */

import {Router} from 'express';
import {homeStack, appStack, profileStack, embedStack, projectFormRedirect, logout} from './controllers';
import * as metas from 'lib/utils/metas';
import {redirect} from 'lib/routes/helpers';

/**
 * Create and expose router
 */

const app = Router();
export default app;

/**
 * Define routes
 */

// Landing ----------------------------
app.get('/', metas.dashboard, homeStack);

app.get('/collections', metas.collections, homeStack);
app.get('/dashboards', metas.dashboards, homeStack);
app.get('/projects', metas.projects, homeStack);
app.get('/users', metas.users, homeStack);

// APP --------------------------------
app.get('/collections/:cid', metas.collection, appStack);
app.get('/collections/:cid/forms', metas.collection, appStack);
app.get('/collections/:cid/forms/:form', metas.collection, appStack);
app.get('/dashboards/:dashboard', metas.dashboard, appStack);
app.get('/dashboards/:dashboard/surveys', metas.dashboard, appStack);
app.get('/dashboards/:dashboard/surveys/:fid/respond', metas.dashboard, appStack);
app.get('/dashboards/:dashboard/surveys/:fid', metas.dashboard, appStack);
app.get('/dashboards/:dashboard/forms', metas.dashboard, appStack);
app.get('/dashboards/:dashboard/forms/:form', metas.dashboard, appStack);
app.get('/dashboards/:dashboard/create', metas.dashboard, appStack);

app.get('/forms', metas.dashboard, appStack);
app.get('/forms/:fid', metas.dashboard, appStack);
app.get('/forms/:fid/:pid/respond', metas.dashboard, appStack);
app.get('/forms/:fid/:pid', metas.dashboard, appStack);

app.get('/users/profile', profileStack);
app.get('/users/:user_id', metas.user, appStack);

// Auth  ------------------------------
app.get('/login', homeStack);
app.get('/register', homeStack);
app.get('/lost-password', homeStack);
app.get('/lost-password/:token', homeStack);
app.get('/logout', logout, redirect('/'));

// Projects --------------------------

// if subdomain, redirect new creation url /dashboards/:dash/create
// else go home landing
app.get('/projects/create', projectFormRedirect);

app.get('/projects/:pid', metas.project, appStack);
app.get('/projects/:pid/edit', appStack);
app.get('/projects/:pid/forms', metas.dashboard, appStack);
app.get('/projects/:pid/:status', appStack);

// Short REDIRECT URLs

app.get('/p/:pid', ({params}, res) => res.redirect(302, `/projects/${params.pid}`));
app.get('/d/:domain', ({params}, res) => res.redirect(302, `/dashboards/${params.domain}`));

// EMBED --------------------------------
app.get('/embed/projects/:pid', metas.project, embedStack);
app.get('/embed/dashboards/:dashboard', metas.dashboard, embedStack);

