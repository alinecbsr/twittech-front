import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import About from "./pages/About";
import Conduct from "./pages/Conduct";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Dashboard from "./pages/Dashboard";
import Recover from "./pages/Recover";
import Register from "./pages/Register";

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function Routes() {
  const hasAccess = ()=>{
    const token = localStorage.getItem('token')
    console.log('hasAccess', token)
    if(token){
      return true;
    }else{
      return false;
    }
  }
  const logged = hasAccess();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/conduct" component={Conduct} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <Route path="/recover" component={Recover} />
        <Route path="/register" component={Register} />
        <PrivateRoute authed={logged} path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;