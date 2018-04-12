import React from "react";
import { Router, Route, DefaultRoute, RouteHandler, Redirect } from "react-router";

import BaseLayout from "../components/layouts/Base";
import DashboardLayout from "../components/layouts/Dashboard";


import DashboardOverviewPage from "../components/pages/dashboard/Overview";
import DashboardReportsPage from "../components/pages/dashboard/Reports";
import LoginPage from "../components/pages/Login";
import DashboardMapPage from "../components/pages/dashboard/ConceptMap"
import DashboardSurveyPage from "../components/pages/dashboard/Survey"
import DashboardPracticePage from "../components/pages/dashboard/Survey_practice"
import DashboardChooseSurveyPage from "../components/pages/dashboard/ChooseSurvey"
import DashboardAboutusPage from "../components/pages/dashboard/Aboutus"


var Routes = React.createClass({

  statics: {
    getRoutes: function() {
      return (
          <Route name="base" path="/" handler={BaseLayout}>
            <Route name="dashboard" path="/dashboard" handler={DashboardLayout}>
              <Route name="dashboard.overview" path="/overview" handler={DashboardOverviewPage} />
              <Route name="dashboard.reports" path="/reports" handler={DashboardReportsPage} />
              <Route name="dashboard.ConceptMap" path="/ConceptMap" handler={DashboardMapPage} />
              <DefaultRoute name="dashboard.default" handler={DashboardOverviewPage} />
              <Route name="dashboard.ChooseSurvey" path="/ChooseSurvey" handler={DashboardChooseSurveyPage} />
              <Route name="dashboard.survey" path="/Survey" handler={DashboardSurveyPage} />
              <Route name="dashboard.aboutus" path="/Aboutus" handler={DashboardAboutUsPage} />
              <Route name="dashboard.Survey_practice" path="/Survey" handler={DashboardPracticePage} />
            </Route>
            <Route name="login" path="/login" handler={LoginPage} />
            <DefaultRoute name="default" handler={DashboardLayout} />
            <Redirect from="/" to="dashboard.overview" />
          </Route>
      );
    }
  },
  render: function() {

  }

});

export default Routes;
