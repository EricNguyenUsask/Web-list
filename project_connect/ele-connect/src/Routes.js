import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
 
import * as pages from './page'
 
export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={pages.HomePage} />
                <Route path={'/student'} component={pages.StudentPage} />
            </Switch>
        </Router>
    );
}
