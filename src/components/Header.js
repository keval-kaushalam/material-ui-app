import React from 'react'
import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import SearchIcon from '@mui/icons-material/Search'
import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/system'

const theme = createTheme()

const useStyle = makeStyles({
    root:{
        backgroundColor:"white !important",
        transform: "translate(0)"
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',

        '&:hover': {
            backgroundColor: '#f2f2f2'
        },

        '& .MuiSvgIcon-root':{
            marginRight:'8px'
        }
    }
})

const Header = () => {

    const classes = useStyle()
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase 
                            className={classes.searchInput}
                            placeholder="Search Topics"
                            startAdornment={ <SearchIcon fontSize="small" /> }
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <ChatBubbleOutlineIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )

}

export default Header
