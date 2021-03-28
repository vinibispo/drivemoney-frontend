import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login";

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>Hello World</h1>} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
