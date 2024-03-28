import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

function PrivateLink({ children}) {
const {loggedInUser} = useSelector((state) => state)
const { userLoggedIn } = useAuth()

// console.log(isLoggedIn,"priv")
// const {loggedInUser:isLoggedIn} = useSelector((state) => state)

return (
        <div>
            {
                userLoggedIn ? 
                <>{children}</> :
                <Navigate to="/login"/>
            }
        </div>
    )
}

export default PrivateLink