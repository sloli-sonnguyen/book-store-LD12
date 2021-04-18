import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/styles/global';
import { routes, adminRoutes } from './routes';
import { PrimaryLoading } from './components/Base/Loading/Loading';

import Header from './components/commons/Header/Header';
import Footer from './components/commons/Footer/Footer';

const loading = <PrimaryLoading type="spin" color="#d14031" />;

const Admin = ({ match }) => (
  <>
    {adminRoutes.map((route) => (
      <Route
        key={route.id}
        exact={route.exact && true}
        path={`${match.path}/${route.path}`}
        name={route.name}
        component={route.component}
      />
    ))}
  </>
);

const Other = ({ match }) => (
  <>
    <Header p={18} />
    {routes.map((route) => (
      <Route
        key={route.id}
        exact={route.exact && true}
        path={`${match.path}${route.path}`}
        name={route.name}
        component={route.component}
      />
    ))}
    <Footer />
  </>
);
function App() {
  // const booksApiUrl = process.env.REACT_APP_BOOKS_API_URL;
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/" component={Other} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
