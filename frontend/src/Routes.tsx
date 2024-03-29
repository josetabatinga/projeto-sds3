import Dashboard from "pages/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"

const Routes = () => {
    return (
        <BrowserRouter>

            <Switch>

                <Route path="/" exact >
                    <Home />
                </Route>

                <Route path="/dashboard" exact >
                    <Dashboard />
                </Route>

            </Switch>


        </BrowserRouter>
    );
}

export default Routes;
