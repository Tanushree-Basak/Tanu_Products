import React from 'react'
import { AppBar,Toolbar } from '@mui/material';

 function NavBar() {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
               <h3>Products</h3>
            </Toolbar>
           
        </AppBar>
    </div>
    
  )
}

export default NavBar