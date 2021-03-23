import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { DefaultLayout } from "./components/layouts/defaultLayout";
import { combineReducers, createStore } from "redux";
import { colorsReducer } from "./features/colors/redux/reducer";
import { Provider } from "react-redux";

const rootReducer = combineReducers({ colors: colorsReducer });
const store = createStore(rootReducer);

function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DefaultLayout routes={routes}>
          <Switch>
            {routes.map((route) => {
              if (!!route.path) {
                return (
                  <Route path={route.path} exact={route.exact}>
                    <route.component />
                  </Route>
                );
              }
              return (
                <>
                  {route.subroutes.map((route) => {
                    return (
                      <Route path={route.path} exact={route.exact}>
                        <route.component />
                      </Route>
                    );
                  })}
                </>
              );
            })}
            <Route path="*">
              <h1>404 not found</h1>
            </Route>
          </Switch>
        </DefaultLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
