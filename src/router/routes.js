const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'typography', component: () => import('pages/Typography.vue') },
      { path: 'colors', component: () => import('pages/Colors.vue') },
      { path: 'spacing', component: () => import('pages/Spacing.vue') },
      { path: 'breakpoint', component: () => import('pages/BreakPoints.vue') },
      { path: 'classes-variables', component: () => import('pages/ClassesVariables.vue') },
      { path: 'flex-grid-1', component: () => import('pages/FlexGrid1.vue') },
      {
        path: 'profile',
        component: () => import('src/pages/profile/ProfilePage.vue'),
        children : [
          {
            path: '',
            component: () => import('src/pages/profile/ProfilePosts.vue')
          },
          {
            path: 'saved',
            component: () => import('src/pages/profile/ProfileSaved.vue')
          },
          {
            path: 'tagged',
            component: () => import('src/pages/profile/ProfileTagged.vue')
          },
        ]
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
