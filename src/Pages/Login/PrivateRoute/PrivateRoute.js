import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";


function PrivateRoute({ children, ...rest }) {
    let { isLoading, user } = useAuth();

    if (isLoading) {
        return <div className='text-center'>
            <div className="spinner-grow" role="status"><span className="visually-hidden">Loading...</span></div>
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}


export default PrivateRoute;