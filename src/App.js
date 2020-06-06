import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./App.scss";
import { Employee, Admin } from "./containers";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={() => <Spinner />}>
          <Switch>
            <Route
              path="/employee"
              name="Employee"
              render={(props) => <Employee {...props} />}
            />
            <Route
              path="/admin"
              name="Admin"
              render={(props) => <Admin {...props} />}
            />
            <Redirect from="/" to="/admin" />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
