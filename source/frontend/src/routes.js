import React from 'react';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

const routes = [
  { id: 1, path: '/', exact: true, name: 'HomePage', component: HomePage },
  { id: 2, path: '/products', name: 'ProductsPage', component: ProductsPage },
  { id: 3, path: '/contact', name: 'ContactPage', component: ContactPage },
];

export default routes;
