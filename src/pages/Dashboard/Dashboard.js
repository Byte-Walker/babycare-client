import './Dashboard.css';
import logo from '../../media/BabyCare-Logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from 'react-router-dom';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import MyOrders from '../MyOrders/MyOrders';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddReview from '../AddReview/AddReview';
import PaymentsIcon from '@mui/icons-material/Payments';
import Pay from '../Pay/Pay';
import useAuth from '../../hooks/useAuth';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import ManageProducts from '../Admin/ManageProducts.js/ManageProducts';
import AddProduct from '../Admin/AddProduct/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import PrivateAdmin from '../../components/PrivateAdmin/PrivateAdmin';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, signOutUser } = useAuth();
    const { uid } = user;
    const [role, setRole] = React.useState('');
    console.log(role);

    React.useEffect(() => {
        fetch(`https://morning-tundra-59616.herokuapp.com/user/${uid}`)
            .then((response) => response.json())
            .then((data) => setRole(data.role));
    }, [uid]);

    const linkStyle = {
        textDecoration: 'inherit',
        color: 'inherit',
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <img src={logo} alt="babycare" style={{ width: '100%' }} />
            </Toolbar>
            <Divider />
            <List>
                <Link to="/" style={linkStyle}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            {/* Menu items based on the role */}
            {role === 'user' ? (
                <List>
                    {/* My orders button */}
                    <Link to={`${url}/myorders`} style={linkStyle}>
                        <ListItem button>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Orders" />
                        </ListItem>
                    </Link>

                    {/* Add reviews button*/}
                    <Link to={`${url}/addreviews`} style={linkStyle}>
                        <ListItem button>
                            <ListItemIcon>
                                <ReviewsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add Review" />
                        </ListItem>
                    </Link>

                    {/* Pay button*/}
                    <Link to={`${url}/pay`} style={linkStyle}>
                        <ListItem button>
                            <ListItemIcon>
                                <PaymentsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pay" />
                        </ListItem>
                    </Link>
                    <ListItem button onClick={signOutUser}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" />
                    </ListItem>
                </List>
            ) : role === 'admin' ? (
                <List>
                    {/* Manage orders button */}
                    <Link to={`${url}/manageorders`} style={linkStyle}>
                        <ListItem button>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Manage Orders" />
                        </ListItem>
                    </Link>

                    {/* Manage Products button */}
                    <Link to={`${url}/manageproducts`} style={linkStyle}>
                        <ListItem button>
                            <ListItemIcon>
                                <LocalMallIcon />
                            </ListItemIcon>
                            <ListItemText primary="Manage products" />
                        </ListItem>
                    </Link>

                    {/* Manage Products button */}
                    <Link to={`${url}/addproduct`} style={linkStyle}>
                        <ListItem button>
                            <ListItemIcon>
                                <AddShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add a product" />
                        </ListItem>
                    </Link>

                    {/* Add Admin button*/}
                    <Link to={`${url}/makeadmin`} style={linkStyle}>
                        <ListItem button>
                            <ListItemIcon>
                                <AdminPanelSettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Make an admin" />
                        </ListItem>
                    </Link>
                    <ListItem button onClick={signOutUser}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" />
                    </ListItem>
                </List>
            ) : null}
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            {/* <Header /> */}
            <Box sx={{ display: 'flex', position: 'relative' }}>
                <CssBaseline />
                <AppBar
                    position="absolute"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                                position: 'relative',
                                height: '80vh',
                            },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}
                >
                    <Toolbar />

                    {/* Route */}

                    <Switch>
                        {/* User routes */}
                        <Route exact path={path}>
                            <h1 style={{ textAlign: 'center' }}>
                                {role === 'admin'
                                    ? 'Welcome to the Admin panel'
                                    : role === 'user'
                                    ? 'Welcome to your dashboard!'
                                    : null}
                            </h1>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders />
                        </Route>
                        <Route path={`${path}/addreviews`}>
                            <AddReview />
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay />
                        </Route>

                        {/* Admin routes */}
                        <PrivateAdmin role={role} path={`${path}/manageorders`}>
                            <ManageOrders />
                        </PrivateAdmin>
                        <PrivateAdmin
                            role={role}
                            path={`${path}/manageproducts`}
                        >
                            <ManageProducts />
                        </PrivateAdmin>
                        <PrivateAdmin role={role} path={`${path}/addproduct`}>
                            <AddProduct />
                        </PrivateAdmin>
                        <PrivateAdmin role={role} path={`${path}/makeadmin`}>
                            <MakeAdmin />
                        </PrivateAdmin>
                    </Switch>
                </Box>
            </Box>
        </div>
    );
}


export default Dashboard;
