import Dashboard from "pages/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home"

const Routes = () => {
    return (
        <BrowserRouter>
        
            <switch>

                <Route path = "/" exact >
                    <Home />
                </Route>

                <Route path="/dashboard" exact >
                    <Dashboard />
                </Route>

            </switch>
        
        
        </BrowserRouter>
    );
}

export default Routes;
