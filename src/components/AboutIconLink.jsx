import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
    return (
        // Link is like an a tag
        // But if you use Link the page does not refresh
        // Use Link for internal links, a tag for external
        <Link
            to={{
                pathname: '/about', // pathname = url
                search: '?sort=name', // search = query
                hash: '#hello', // hash = hash #section
            }}
        >
            <div className="about-link">
                <FaQuestion size={24} />
            </div>
        </Link>
    )
}

export default AboutIconLink
