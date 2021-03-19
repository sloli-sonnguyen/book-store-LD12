import React from 'react';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));

const routes = [
  { path: '/', exact: true, name: 'HomePage', component: HomePage },
  { path: '/products', name: 'ProductsPage', component: ProductsPage },
];

export default routes;
