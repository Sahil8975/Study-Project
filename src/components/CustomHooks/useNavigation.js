import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Routes/Path';

export function useNavigation() {
  const navigate = useNavigate();
  const { PROJECTS, ADD_PROJECTS,UPDATE_PROJECTS } = ROUTES;


  // You can define custom navigation functions here
  function navigateToAddProject() {
    navigate(ADD_PROJECTS);
  }

  // Add more navigation functions as needed

  return {
    navigate,
    navigateToAddProject,
    // Add other navigation functions to the returned object
  };
}