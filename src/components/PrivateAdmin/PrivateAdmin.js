import { Redirect, Route } from 'react-router';

function PrivateAdmin({ children, role, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                role === 'admin' ? (
                    children
                ) : role === 'user' ? (
                    <Redirect
                        to={{
                            pathname: '/dashboard',
                            state: { from: location },
                        }}
                    />
                ) : null
            }
        />
    );
}

export default PrivateAdmin;
