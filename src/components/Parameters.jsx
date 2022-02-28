import React from 'react'
import { useParams } from 'react-router-dom'

function Parameters() {
    const params = useParams()

    // URL = /parameters/:id/:name
    // EXAMPLE: /parameters/1/john
    return (
        <>
            {/* Post 1 */}
            <h1>Post {params.id}</h1>
            {/* Hello john */}
            <p>Hello {params.name}</p>
        </>
    )
}

export default Parameters
