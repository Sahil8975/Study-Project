import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Redux/Reducer/index';

import AddProject from '../components/Project/AddProject';
import ProjectDetails from '../components/Project/ProjectDetails';
// import HomePage from '../components/HomePage/HomePage';
import { ROUTES } from './Path';
import UpdateDetails from '../components/Project/UpdateDetails';
import Services from '../components/Service/Services';
import Announcement from '../components/Announcement/Announcement';
import SelfService from '../components/Self_Service/SelfService';
import Login from '../components/Login/Login';
import store from '../Redux/Store';
import React, { Profiler, useCallback } from 'react';
const LazyAddProject = React.lazy(()=>import ('../components/Project/AddProject'))
const LazyHome = React.lazy(()=>import ('../components/HomePage/HomePage'))

// Create the Redux store with the combined reducer and apply middleware
// const store = createStore(rootReducer, applyMiddleware(thunk));

function RoutePath() {
  const { HOME, PROJECTS, ADD_PROJECTS, UPDATE_PROJECTS, SERVICES, SELF_SERVICE, ANNOUNCEMENT, LOGIN } = ROUTES;
  
  const callBackFn=(id, phase, actualDuration, baseDuration, startTime, commitTime)=>{
  console.log("id",id)
  console.log("phase",phase)
  console.log("actualDuration",actualDuration)
  console.log("baseDuration",baseDuration)
  console.log("startTime",startTime)
  console.log("commitTime",commitTime)

  }

  return (
    <Provider store={store}>
      <Routes>
        <Route path={LOGIN} element={<Login />} />
        {/* <Route path={HOME} element={<HomePage />} /> */}
        <Route path={HOME} element={<React.Suspense fallback='Loading...'>
          <LazyHome/>
          </React.Suspense>} />

        <Route path={PROJECTS} element={<Profiler id='CustomHooks' onRender={callBackFn}><ProjectDetails /></Profiler>} /> 
        {/* <Route path={ADD_PROJECTS} element={<AddProject />} /> */}
        <Route path={ADD_PROJECTS} element={<React.Suspense fallback='Loading...'>
          <LazyAddProject/>
          </React.Suspense>} />
        <Route path={UPDATE_PROJECTS} element={<UpdateDetails />} />
        <Route path={SERVICES} element={<Services />} />
        <Route path={ANNOUNCEMENT} element={<Announcement />} />
        <Route path={SELF_SERVICE} element={<SelfService />} />
        <Route path="*" element={<Navigate to={LOGIN} />} />
      </Routes>
    </Provider>
  );
}

export default RoutePath;
