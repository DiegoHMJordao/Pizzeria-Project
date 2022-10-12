import React from 'react'
import {useRoutes} from 'react-router-dom'
import Home from '../components/Home/Home'
import Menu from '../components/Menu/Menu'
import Reservas from '../components/Reservas/Reservas'
import NotFound from '../components/NotFound/NotFound'

const Routes = () => {
    return useRoutes([
        {path:"/", element:<Home />},
        {path:"/home", element:<Home />},
        {path:"/menu", element:<Menu />},
        {path:"/reservas", element:<Reservas />},
        {path:"*", element:<NotFound />}
    ])
}

export default Routes