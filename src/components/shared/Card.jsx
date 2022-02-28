import React from 'react'
import PropTypes from 'prop-types'

// if you want the Card component to be able to display children,
// just pass a prop { children } and then return it, {children}
function Card({ children, reverse }) {
    return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    // children is a type node
    // a node is anything that can be rendered:
    // numbers, strings, html ELEMENTS or an array
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card
