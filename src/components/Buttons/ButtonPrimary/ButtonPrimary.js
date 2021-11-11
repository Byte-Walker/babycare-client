import React from 'react';
import Button from '@mui/material/Button';

const ButtonPrimary = ({text}) => {
    const style = {
        color: 'white',
        // borderRadius: '10px',
    }
    return (
        <Button variant="contained" size='large' sx={style}>{text}</Button>
    );
};

export default ButtonPrimary;