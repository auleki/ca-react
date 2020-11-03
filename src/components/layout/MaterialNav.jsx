import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }, 
  title: {
    flexGrow: 1
  }
}))

const MaterialNav = () => {
  
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => setAnchorEl(null)
  
 return (
       <div className={classes.root}>
         <AppBar position="static">
           <Toolbar variant="dense">
             <IconButton 
              edge="start"
              className={classes.menuButton}>
              {/* <MenuIcon /> */}
             </IconButton>
             <Typography variant="h6" className={classes.title}>
               CHECKADIGS.
             </Typography>
           </Toolbar>
         </AppBar>
       </div>
   )
}
export default MaterialNav