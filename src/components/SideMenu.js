import React from 'react'
import { makeStyles } from '@mui/styles';

// withStyles & makeStyles
const useStyle = makeStyles({
    sideMenu: {
        display:'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#215465'
    }
})

const SideMenu = () => {

    const classes = useStyle();
    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default SideMenu
