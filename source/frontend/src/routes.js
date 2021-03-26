import React from 'react';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'));
const BlogsPage = React.lazy(() => import('./pages/BlogsPage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));

const routes = [
  { id: 1, path: '/', exact: true, name: 'HomePage', component: HomePage },
  { id: 2, path: '/products', exact: true, name: 'ProductsPage', component: ProductsPage },
  { id: 3, path: '/contact', name: 'ContactPage', component: ContactPage },
  { id: 4, path: '/products/:id', name: 'ProductDetailPage', component: ProductDetailPage },
  { id: 5, path: '/blogs', exact: true, name: 'BlogsPage', component: BlogsPage },
  { id: 6, path: '/cart', exact: true, name: 'CartPage', component: CartPage },
];

export default routes;
