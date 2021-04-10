import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/styles/global';
import routes from './routes';
import { PrimaryLoading } from './components/Base/Loading/Loading';

const loading = <PrimaryLoading type="spin" color="#d14031" />;

function App() {
  const booksApiUrl = process.env.REACT_APP_BOOKS_API_URL;
  console.log(booksApiUrl);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <React.Suspense fallback={loading}>
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
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
