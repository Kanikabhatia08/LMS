import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateLink({ children}) {
const {loggedInUser} = useSelector((state) => state)
// console.log(isLoggedIn,"priv")
// const {loggedInUser:isLoggedIn} = useSelector((state) => state)

return (
        <div>
            {
                loggedInUser ? 
                <>{children}</> :
                <Navigate to="/login"/>
            }
        </div>
    )
}

export default PrivateLink