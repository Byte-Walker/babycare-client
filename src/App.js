import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Explore from './pages/Explore/Explore';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { createContext } from 'react';
import useFirebase from './hooks/useFirebase';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import Dashboard from './pages/Dashboard/Dashboard';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fd6a8a',
        },
        secondary: {
            main: '#f5e1ec',
        },
    },
});

// Auth context
export const AuthContext = createContext();

function App() {
    const auth = useFirebase();

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <AuthContext.Provider value={auth}>
                    <Switch>
                        {/* Home route */}
                        <Route exact path={['/', '/home']}>
                            <Home />
                        </Route>

                        {/* Explore route */}
                        <PrivateRoute exact path={'/explore'}>
                            <Explore />
                        </PrivateRoute>

                        {/* Placeorder route */}
                        <PrivateRoute exact path={'/placeorder/:productId'}>
                            <PlaceOrder />
                        </PrivateRoute>

                        {/* My Orders route */}
                        <PrivateRoute exact path={'/myorders'}>
                            <MyOrders />
                        </PrivateRoute>

                        {/* My Orders route */}
                        <PrivateRoute path={'/dashboard'}>
                            <Dashboard />
                        </PrivateRoute>

                        {/* Login route */}
                        <Route exact path={['/login', '/login/:from']}>
                            <Login />
                        </Route>

                        {/* Register route */}
                        <Route
                            exact
                            path={['/register', '/register/:redirectTo']}
                        >
                            <Register />
                        </Route>
                    </Switch>
                </AuthContext.Provider>
            </ThemeProvider>
        </Router>
    );
}

export default App;
