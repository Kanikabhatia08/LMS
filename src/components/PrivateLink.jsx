import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateLink({isLoggedIn, children}) {
console.log(isLoggedIn,"privvvvvvvvvvv")
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