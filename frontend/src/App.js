import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Watch from "./pages/watch/Watch";
import Location from "./pages/location/Location"
import Give from "./pages/give/Give"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home /> 
        </Route>
        <Route path="/login">
        {user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/watch">
            <Watch /> 
        </Route>
        <Route path="/location">
         <Location /> 
        </Route>
        <Route path="/give">
         < Give/> 
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
