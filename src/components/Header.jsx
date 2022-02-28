import React from 'react'
// PropTypes enables type checking for props
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// another way to pass props if you know the name of the props
// is to wrap the prop names around curly brackets {}
function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <Link to="/">
                    <h2>{text}</h2>
                </Link>
            </div>
        </header>
        // { color: textColor }
    )
}

// default props, if nothing gets passed
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0, 0, 0, 0.4)',
    textColor: '#ff6a95',
}

// PropTypes, props type checking
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    // PropTypes.string.isRequired, if it is required
}

// BEWARE: if you use typescript, you don't need to use PropTypes
// you don't even need to use PropTypes if you don't use typescript
// only if it is needed for the right situation

export default Header
