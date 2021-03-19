import React from 'react';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));

const routes = [
  { id: 1, path: '/', exact: true, name: 'HomePage', component: HomePage },
  { id: 2, path: '/products', name: 'ProductsPage', component: ProductsPage },
];

export default routes;
