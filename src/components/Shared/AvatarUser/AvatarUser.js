import React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

import ExploreIcon from '@mui/icons-material/Explore';

const AvatarUser = ({ user, handleSignOut }) => {
    //-----------------------Avatar controller------------------------------
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //-----------------------------------------------------------------------

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

    // Component AvatarUser
    return (
        <React.Fragment>
            {/* Avatar Icon / image */}
            <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    {/* Checking if the user has profile picture or not */}
                    {user.img ? (
                        <Avatar alt={user.displayName} src={user.img} />
                    ) : user.displayName ? (
                        <Avatar {...stringAvatar(`${user.displayName}`)} />
                    ) : null}
                </IconButton>
            </Tooltip>

            {/* Popup menu while clinking the avatar */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {/* Links of the popup menu */}
                {/* Dashboard */}
                <Link
                    to="/dashboard"
                    style={{
                        textDecoration: 'inherit',
                        color: 'inherit',
                        display: 'inherit',
                    }}
                >
                    <MenuItem>
                        <Avatar /> Dashboard
                    </MenuItem>
                </Link>

                {/* Explore */}
                <Link
                    to="/explore"
                    style={{
                        textDecoration: 'inherit',
                        color: 'inherit',
                        display: 'inherit',
                    }}
                >
                    <MenuItem sx={{ paddingLeft: '10px' }}>
                        <ListItemIcon>
                            <ExploreIcon
                                sx={{
                                    fontSize: '35px',
                                    color: '#BDBDBD',
                                    marginRight: '8px',
                                }}
                            />
                        </ListItemIcon>
                        Explore
                    </MenuItem>
                </Link>

                <Divider sx={{ margin: '5px 0' }} />

                {/* Sign out button */}
                <MenuItem onClick={handleSignOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default AvatarUser;
