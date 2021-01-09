import React from "react";
import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Users from "./Pages/Users";


const ParamsLocationHistory=()=>{
    return(
        <BrowserRouter>
            {/* <Link to="/">Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link> */}

            <NavLink activeClassName={""} to="/">Home </NavLink>
            <NavLink activeClassName={""} to="/about"> About </NavLink>
            <NavLink activeClassName={""} to="/contact"> Contact </NavLink>
            <NavLink activeClassName={""} to="/users"> Users </NavLink>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                {/* For useParams Hook */}
                <Route exact path="/users/:fname/:lname" component={Users}/> 
            </Switch>
        </BrowserRouter>
    )
}

export default ParamsLocationHistory;