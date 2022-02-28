import React, { useContext } from 'react'
// import PropTypes from 'prop-types'

// useContext
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext)

    // calculate ratings average
    let average =
        feedback.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.rating
        }, 0) / feedback.length

    // clean average by removing 0 when is a whole number
    // 7.0 becomes 7
    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>
                {/* if average is NaN, show 0, if not, show average rounded by 2, example 7.2 */}
                Average Rating: {isNaN(average) ? 0 : average}
            </h4>
        </div>
    )
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats
