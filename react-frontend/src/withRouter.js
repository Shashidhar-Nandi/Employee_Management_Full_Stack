// src/withRouter.js
import { useNavigate, useParams, useLocation } from 'react-router-dom';

export function withRouter(Component) {
    return function(props) {
        const navigate = useNavigate();
        const params = useParams();
        const location = useLocation();
        return <Component {...props} navigate={navigate} params={params} location={location} />;
    };
}
