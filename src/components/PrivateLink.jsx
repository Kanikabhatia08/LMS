import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateLink({isLoggedIn, children}) {

    return (
        <div>
            {
                isLoggedIn ? 
                <>{children}</> :
                <Navigate to="/login"/>
            }
        </div>
    )
}

export default PrivateLink