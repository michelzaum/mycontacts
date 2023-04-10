/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */

import { useLocation, useNavigate } from 'react-router-dom';

/* eslint-disable react/function-component-definition */
export default function withRouter(Component) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
      <Component {...props} location={location} navigate={navigate} />
    );
  };
}
