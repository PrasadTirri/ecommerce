import React from 'react'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'
import Navbars from './components/Navbar'
import { Provider } from 'react-redux'
import store from './components/store/store'

const MainRoute = () => {
  return (
    <Provider store={store}>
    <Grid>
    <Navbars />
    </Grid>
      
        <main>
            <Outlet />
        </main>
    </Provider>
  )
}

export default MainRoute