import React from 'react';
import './Header.css';
import logo from '../../../media/BabyCare-Logo.png';
import { Link, NavLink } from 'react-router-dom';
import PersonIconOutlined from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Button, IconButton, Avatar } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, signOutUser } = useAuth();

    // Sign out user
    const handleSignOut = () => {
        signOutUser();
    };

    //String to color converter
    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string?.length; i += 1) {
            hash = string?.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    // String to avatar converter
    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name?.split(' ')[0][0]}${name?.split(' ')[1][0]}`,
        };
    }

    return (
        <div className="navbar-container">
            <nav className="navbar max-width">
                <Link to="/">
                    <img
                        src={logo}
                        alt="BabyCare logo"
                        className="navbar-logo"
                    />
                </Link>

                <div className="navbar-menu">
                    <NavLink
                        to="/home"
                        activeStyle={{
                            color: '#ff8ea6',
                            borderColor: '#ff8ea6',
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/explore"
                        activeStyle={{
                            color: '#ff8ea6',
                            borderColor: '#ff8ea6',
                        }}
                    >
                        Explore
                    </NavLink>
                    <NavLink
                        to="/contact"
                        activeStyle={{
                            color: '#ff8ea6',
                            borderColor: '#ff8ea6',
                        }}
                    >
                        Contact
                    </NavLink>
                </div>

                <div className="navbar-icons">
                    {/* Cart icon */}
                    <IconButton aria-label="cart" sx={{ marginRight: '5px' }}>
                        <Badge badgeContent={1} color="primary">
                            <ShoppingCartOutlinedIcon
                                sx={{ fontSize: 35, color: 'black' }}
                            />
                        </Badge>
                    </IconButton>

                    {/* Profile Icon */}
                    <div className="avatar">
                        {user?.email ? (
                            user.img ? (
                                <Avatar alt={user.displayName} src={user.img} />
                            ) : user.displayName ? (
                                <Avatar
                                    {...stringAvatar(`${user.displayName}`)}
                                />
                            ) : null
                        ) : (
                            <Link to="/login">
                                <Avatar  sx={{ bgcolor: 'var(--color-secondary)' }}>
                                <PersonIconOutlined
                                        sx={{ fontSize: 35, color: 'black' }}
                                    />
                                </Avatar>
                                
                                {/* <IconButton aria-label="profile">
                                    <PersonIconOutlined
                                        sx={{ fontSize: 35, color: 'black' }}
                                    />
                                </IconButton> */}
                            </Link>
                        )}
                    </div>

                    {/* Logout btn */}
                    <Button onClick={handleSignOut}>Logout</Button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
