import * as types from '../Constants';
import { addProjectDataAPI, updateProjectDetailsAPI } from '../api'; 

// Asynchronous action creator to add project data
export const addProjectData = (payload) => {
  return async (dispatch) => {
    try {
      // Call API function to add project data
      const response = await addProjectDataAPI(payload);
      // Dispatch action with the received data
      dispatch({ type: types.ADD_PROJECT_DETAILS, data: response.data });
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
};

// Asynchronous action creator to update project details
export const updateProjectDetails = (projectId, payload) => {
  return async (dispatch) => {
    try {
      // Call API function to update project details
      const response = await updateProjectDetailsAPI(projectId, payload);
      // Dispatch action with the received data
      dispatch({ type: types.UPDATE_PROJECT_DETAILS, data: response.data });
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
};

export const setProjectDetails = (projectDetails) => {
  return { type: types.PROJECT_DETAILS, data: projectDetails };
};

export const setProjectUsers = (users) => {
  return { type: types.GET_USERS, data: users };
};

export const setProjectClient = (client) => {
  return { type: types.GET_CLIENT, data: client };
};

export const setProjectHead = (head) => {
  return { type: types.GET_PROJECT_HEAD, data: head };
};

// Action creator to set project managers
export const setProjectManagers = (managers) => {
  return { type: types.GET_PROJECT_MANAGERS, data: managers };
};

// Action creator to set data loading status
export const setDataLoading = (isLoading) => {
  return { type: types.IS_DATA_LOADING, data: isLoading };
};
