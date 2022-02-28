import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

function Redirect() {
    // navigate('/route) = redirect to another route or same route
    const navigate = useNavigate()
    const handleClick = () => {
        console.log('Hello')
        navigate('/redirect')
    }

    const [status, setStatus] = useState(200)
    const setStatusTo404 = () => {
        setStatus(404)
    }

    if (status === 404) {
        // Navigate = redirect component to another route or same route
        return <Navigate to="/notfound" />
    }

    return (
        <>
            {/* if you go to /redirect this will render, check App.js */}
            <h1>Redirect</h1>
            <button onClick={handleClick}>
                Click Here To log Hello and Redirect To Same Page
            </button>

            <div>
                <button onClick={setStatusTo404}>Set Status To 404</button>
            </div>
        </>
    )
}

export default Redirect
