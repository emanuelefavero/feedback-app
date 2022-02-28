import React, { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(4)

    // NOTE: import context
    const { addFeedback, feedbackEdit, updateFeedback } =
        useContext(FeedbackContext)

    // NOTE: if edit true, set text and rating to edited item text and rating
    useEffect(() => {
        if (feedbackEdit.edit) {
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    function handleTextChange(event) {
        setText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }

            if (feedbackEdit.edit) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
                // setEditAnimation('')
            } else {
                addFeedback(newFeedback)
            }
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="write a review"
                        value={text}
                        name="review"
                    />
                    <Button
                        type="submit"
                        version="secondary"
                        isDisabled={text.trim().length < 10 && true}
                    >
                        Send
                    </Button>
                </div>

                {text.length > 0 && text.trim().length < 10 ? (
                    <p className="alert-messsage">
                        Text must be at least 10 characters
                    </p>
                ) : null}
            </form>
        </Card>
    )
}

export default FeedbackForm
