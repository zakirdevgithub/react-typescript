import React from "react";
import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


const RouterCom=()=>{
    return(
        <BrowserRouter>
            {/* <Link to="/">Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link> */}

            <NavLink activeClassName={""} to="/">Home </NavLink>
            <NavLink activeClassName={""} to="/about"> About </NavLink>
            <NavLink activeClassName={""} to="/contact"> Contact </NavLink>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </BrowserRouter>
    )
}

export default RouterCom;