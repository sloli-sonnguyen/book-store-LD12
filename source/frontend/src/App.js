import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/styles/global';
import routes from './routes';
import { PrimaryLoading } from './components/Base/Loading/Loading';

import Header from './components/commons/Header/Header';
import Footer from './components/commons/Footer/Footer';

const loading = <PrimaryLoading type="spin" color="#d14031" />;

function App() {
  // const booksApiUrl = process.env.REACT_APP_BOOKS_API_URL;
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Header p={18} />
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.id}
                exact={route.exact && true}
                path={route.path}
                name={route.name}
                component={route.component}
              />
            ))}
          </Switch>
          <Footer />
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
