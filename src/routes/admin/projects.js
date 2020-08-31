import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Project = lazy(() => import('../../container/project/Project'));
const ProjectDetails = lazy(() => import('../../container/project/ProjectDetails'));

const ProjectRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path} component={Project} />
      <Route exact path={`${path}/single/:id`} component={ProjectDetails} />
    </Switch>
  );
};

export default ProjectRoutes;
