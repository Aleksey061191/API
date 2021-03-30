import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes"
import { DefaultLayout } from './components/layouts/defaultLayout.js'
import { FilmContextProvider } from './context/FilmContext';


function App() {
  
  return (
    <FilmContextProvider>
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          {routes.map(route => {
            return (
              <Route path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            )
          })}
          <Route path="*">
              <h1>404 not found</h1>
            </Route>
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  </FilmContextProvider>
  );
}

export default App;
