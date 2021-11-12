import React from 'react';
import './Header.css';
import logo from '../../../media/BabyCare-Logo.png';
import { Link, NavLink } from 'react-router-dom';
import PersonIconOutlined from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Avatar } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import AvatarUser from '../AvatarUser/AvatarUser';

const Header = () => {
    const { user, signOutUser } = useAuth();

    // Sign out user
    const handleSignOut = () => {
        signOutUser();
    };

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
                        to="/dashboard"
                        activeStyle={{
                            color: '#ff8ea6',
                            borderColor: '#ff8ea6',
                        }}
                    >
                        Dashboard
                    </NavLink>
                </div>

                <div className="navbar-icons">
                    {/* Cart icon */}
                    {/* <IconButton aria-label="cart" sx={{ marginRight: '5px' }}>
                        <Badge badgeContent={1} color="primary">
                            <ShoppingCartOutlinedIcon
                                sx={{ fontSize: 35, color: 'black' }}
                            />
                        </Badge>
                    </IconButton> */}

                    {/* Profile Icon */}
                    <div className="avatar">
                        {user?.email ? (
                            <AvatarUser user={user} handleSignOut={handleSignOut}/>
                        ) : (
                            <Link to="/login">
                                <Avatar
                                    sx={{ bgcolor: 'var(--color-secondary)' }}
                                >
                                    <PersonIconOutlined
                                        sx={{ fontSize: 35, color: 'black' }}
                                    />
                                </Avatar>

                            </Link>
                        )}
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;
