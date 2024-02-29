import * as types from '../Constants';

const initialState = {
  // projectDetails: [],
  // addProject: [],
  client:[],
  user:[],
  projectManager:[],
  projectHead:[],
  isDataLoading: false
};
export default function MasterDeatils(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    // case types.PROJECT_DETAILS: {
    //   const projectDetails = data || null;
    //   return { ...state, projectDetails };
    // }
    // case types.ADD_DETAILS: {
    //   const addProject = data || null;
    //   return { ...state, addProject };
    // }
    case types.GET_CLIENT: {
      const client = data || null;
      return { ...state, client };
    }
    case types.GET_USERS: {
      const user = data || null;
      return { ...state, user };
    }
    case types.GET_PROJECT_MANAGERS: {
      const projectManager = data || null;
      return { ...state, projectManager };
    }
    case types.GET_PROJECT_HEAD: {
      const projectHead = data || null;
      return { ...state, projectHead };
    }
    case types.DELETE_USERS:
    case types.ADD_USERS:
    case types.UPDATE_USERS: {
      const addProject = data || null;
      return { ...state, addProject };
    }
    case types.IS_DATA_LOADING: {
      const isDataLoading = data;
      return { ...state, isDataLoading };
    }
    default:
      return state;
  }
}

