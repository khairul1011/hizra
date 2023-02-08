import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Team from "views/our-team.js";
import Visi from "views/Visi";
import FAQ from "views/FAQ";
import Galery1 from "views/galery1";
import FAQ2 from "views/FAQ2";
import Sysdev from "views/Sysdev";

import Layanandigi from "views/Layanandigi";
import Jasabarang from "views/Jasbar";







ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/galery1" exact component={Galery1} />
      <Route path="/our-team" exact component={Team} />
      <Route path="/FAQ" exact component={FAQ} />
      <Route path="/FAQ2" exact component={FAQ2} />
      <Route path="/Visi-misi" exact component={Visi} />
      <Route path="/System-Dev" exact component={Sysdev} />
      
   
      <Route path="/Jasa-layanan" exact component={Layanandigi} />
      <Route path="/Jasa-barang" exact component={Jasabarang} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
