import React from "react";
import {createHashRouter, RouterProvider} from 'react-router-dom'
import {LandingPage} from '../pages'

const router = createHashRouter([
    {
        path: "/",
        element: <LandingPage/>,
        children: [
            {
                path: "",
                element: <LandingPage/>
            }
        ]
    }
],
{
    basename: process.env.REACT_APP_PUBLIC_URL,
}
)

const Routers = () => {
    return <RouterProvider router={router} />
}

export default Routers