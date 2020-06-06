import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./App.scss";
import { EmployeePage } from "./containers/Employee";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={() => <Spinner />}>
          <Switch>
            <Route
              path="/employee"
              name="Employee"
              render={(props) => <EmployeePage {...props} />}
            />
            <Redirect from="/" to="/employee" />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
