import React from 'react'
import {AppBar, CssBaseline, Toolbar, Typography} from '@material-ui/core'
import QueueMusicIcon from '@material-ui/icons/QueueMusic';


function NavBar() {
  return (
    <div>
   <CssBaseline />
   <AppBar position='relative' style={{background: '#2E3B55', color:'#72d9b6', marginRight:'70px'}}>
    <Toolbar>
        < QueueMusicIcon fontSize='large'/>
        <Typography variant='h6' color='white'>
            Playlyst
        </Typography>
    </Toolbar>
    </AppBar>   
    </div>
  )
}

export default NavBar
