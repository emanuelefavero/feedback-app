// IMPORT ----------------------------------------
import React from 'react'

// react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//react router dom  Link
import AboutIconLink from './components/AboutIconLink'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

// pages components
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

// react useContext
import { FeedbackProvider } from './context/FeedbackContext'

// import FeedbackData from './data/FeedbackData'

// Post for 'react-router-dom' useParams
import Parameters from './components/Parameters'
import Redirect from './components/Redirect'
import NestedRoutes from './components/NestedRoutes'

// APP ------------------------------------------
export default function App() {
    // const [feedback, setFeedback] = useState(FeedbackData)

    // RETURN, CONTEXT PROVIDER, ROUTER ---------
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    {/* To pass values back from nested components, */}
                                    {/* so from FeedbackForm to App */}
                                    {/* just pass the function as a prop, handleAdd */}
                                    {/* and call the function inside Feedback Form */}
                                    {/* OR use useContext! */}
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }
                        ></Route>
                        <Route path="/about" element={<AboutPage />} />

                        {/* ------- TODO: REMOVE THIS, NOT PART OF APP ------ */}

                        {/* Parameters.jsx */}
                        <Route
                            path="/parameters/:id/:name"
                            element={<Parameters />}
                        />

                        {/* Redirect.jsx */}
                        <Route path="/redirect" element={<Redirect />} />
                        {/* Redirect.jsx NOT FOUND PAGE */}
                        <Route path="/notfound" element={<NotFoundPage />} />

                        {/* NestedRoutes.jsx */}
                        {/* in order to use nested routes, put * after a route, check Post3.jsx */}
                        <Route
                            path="/nested-routes/*"
                            element={<NestedRoutes />}
                        />

                        {/* -------------------------- */}
                    </Routes>

                    {/* Link Icon */}
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}
