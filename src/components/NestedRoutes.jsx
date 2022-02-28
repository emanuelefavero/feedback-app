import React from 'react'
import { Routes, Route } from 'react-router-dom'

function NestedRoutes() {
    return (
        <>
            <h1>Nested Routes</h1>
            <p>Go To /nested-routes/greet</p>

            <Routes>
                {/* go to /nested-routes/greet */}
                <Route path="/greet" element={<h1>Hello</h1>} />
                <Route path="/saluto" element={<h1>Ciao</h1>} />
            </Routes>
        </>
    )
}

export default NestedRoutes
