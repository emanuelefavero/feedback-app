import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <>
            <h1>Error 404: Sorry Page Not Found</h1>
            <p>
                <Link to="/">Back To Home</Link>
            </p>
        </>
    )
}

export default NotFoundPage
