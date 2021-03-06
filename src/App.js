/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing/index";
import Gbilling from "./pages/Billing/gpayment";
import Rbilling from "./pages/Billing/payment";

import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import Log from "./pages/Log";
import List from "./pages/List";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import "./assets/styles/functions.css";
import "./assets/styles/liveFilter.css";
import "./assets/styles/map.css";

import ListDetail from "./pages/ListDetail";
import Introduce from "./pages/Introduce";
import Calendar from "./pages/Calendar/index";
import Functions from "./pages/Functions";
import LiveFilter from "./pages/FunctionsDetail/LiveFilter";
import Map from "./pages/Map";
import CardProfile from "./pages/CardProfile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/billing/gpayment/:id" component={Gbilling} />
          <Route exact path="/billing/payment/" component={Rbilling} />

          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/log" component={Log} />
          <Route exact path="/List" component={List} />
          <Route exact path="/List/Detail/:id" component={ListDetail} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/functions" component={Functions} />
          <Route exact path="/Map" component={Map} />
          <Route exact path="/CardProfile" component={CardProfile} />

          <Route
            exact
            path="/FunctionsDetail/LiveFilter"
            component={LiveFilter}
          />

          <Route exact path="/introduce" component={Introduce} />

          <Route exact path="/">
            <Redirect to="/introduce" />
          </Route>
        </Main>
      </Switch>
    </div>
  );
}

export default App;
