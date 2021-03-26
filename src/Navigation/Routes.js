import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Components/HomePage";
import NewLeadPage from "../Components/NewLeadPage";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/submit">
                <NewLeadPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes;