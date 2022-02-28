// BEWARE: useState, useEffect added
import React, { useContext, useState, useEffect } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
    // NOTE: import context
    const { deleteFeedback, editFeedback, feedbackEdit } =
        useContext(FeedbackContext)

    // NOTE: animation for edit state
    const [editAnimation, setEditAnimation] = useState('')

    // NOTE: if edit state === true
    // animate specific edited feedback
    // with fade animation
    // after edit state is off (triggered by submitted form), remove animation
    // ALL THANKS TO useEffect (WHEN STATE CHANGES, DO SOMETHING!)
    useEffect(() => {
        if (feedbackEdit.edit && feedbackEdit.item) {
            if (item.id === feedbackEdit.item.id) {
                setEditAnimation('fadeMe 1s infinite linear')
            }
        } else if (!feedbackEdit.edit) {
            setEditAnimation('')
        }
    }, [feedbackEdit, item.id])

    return (
        // in order to put anything inside Card component
        // u just need to put a {children} prop in Card.jsx
        // see Card.jsx
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color="purple" />
            </button>

            {/* NOTE: edit feedback button icon */}
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color="purple" />
            </button>

            <div style={{ animation: editAnimation }} className="text-display">
                {item.text}
            </div>
        </Card>
    )
}

FeedbackItem.protoTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
