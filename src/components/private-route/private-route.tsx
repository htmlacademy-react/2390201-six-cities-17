import { AppRoute, AuthorizationStatus } from '../const/const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;
  return(
    authorizationStatus === AuthorizationStatus.AUTH
      ? children
      : <Navigate to={AppRoute.LOGIN} />
  );
}

export default PrivateRoute;
