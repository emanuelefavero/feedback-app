// NOTE: import
import React, { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(4)

    // NOTE: import context
    const { feedbackEdit } = useContext(FeedbackContext)

    // NOTE: update corresponding rating in the form after clicking edit button
    useEffect(() => {
        if (feedbackEdit.edit) {
            setSelected(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    function handleChange(event) {
        setSelected(Number(event.currentTarget.value))
        select(Number(event.currentTarget.value))
    }

    // set number of scores
    const [scores] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    return (
        <ul className="rating">
            {/* loop thru scores */}
            {scores.map((score) => (
                <li key={score}>
                    <input
                        type="radio"
                        id={'num' + score}
                        name="rating"
                        value={Number(score)}
                        onChange={handleChange}
                        checked={selected === Number(score)}
                    />
                    <label htmlFor={'num' + score}>{score}</label>
                </li>
            ))}
            {/* <li>
                <input
                    type="radio"
                    id="num1"
                    name="rating"
                    value="1"
                    onChange={handleChange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num2"
                    name="rating"
                    value="2"
                    onChange={handleChange}
                    checked={selected === 2}
                />
                <label htmlFor="num2">2</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num3"
                    name="rating"
                    value="3"
                    onChange={handleChange}
                    checked={selected === 3}
                />
                <label htmlFor="num3">3</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num4"
                    name="rating"
                    value="4"
                    onChange={handleChange}
                    checked={selected === 4}
                />
                <label htmlFor="num4">4</label>
            </li> */}
        </ul>
    )
}

export default RatingSelect
