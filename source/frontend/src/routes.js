import React from 'react';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'));
const BlogsPage = React.lazy(() => import('./pages/BlogsPage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const BlogDetailPage = React.lazy(() => import('./pages/BlogDetailPage'));
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'));

const routes = [
  { id: 1, path: '/', exact: true, name: 'HomePage', component: HomePage },
  { id: 2, path: '/products', exact: true, name: 'ProductsPage', component: ProductsPage },
  { id: 3, path: '/contact', name: 'ContactPage', component: ContactPage },
  { id: 4, path: '/products/:id', name: 'ProductDetailPage', component: ProductDetailPage },
  { id: 5, path: '/blogs', exact: true, name: 'BlogsPage', component: BlogsPage },
  { id: 6, path: '/blogs/:id', name: 'BlogsPage', component: BlogDetailPage },
  { id: 7, path: '/cart', exact: true, name: 'CartPage', component: CartPage },
  { id: 8, path: '/search', exact: true, name: 'SearchPage', component: SearchPage },
  { id: 9, path: '/checkout', name: 'CheckoutPage', component: CheckoutPage },
];

export default routes;
