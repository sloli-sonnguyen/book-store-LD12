import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/styles/global';
import routes from './routes';

const loading = <h1>Loading ....</h1>;

function App() {
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
