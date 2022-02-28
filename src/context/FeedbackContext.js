// uuid = npm package that generates unique id's
import { v4 as uuidv4 } from 'uuid'
import React, { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 9,
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 7,
        },
    ])

    // HANDLE ADD FEEDBACK FROM SUBMITTED FeedbackForm
    function addFeedback(newFeedback) {
        // add id to newFeedback object
        newFeedback.id = uuidv4()

        // merge previous feedback data objects array with newFeedback object
        setFeedback([newFeedback, ...feedback])
    }

    // HANDLE DELETE BUTTON
    function deleteFeedback(id) {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            // RETURN EVERY ITEM THAT IS NOT EQUAL TO id
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // NOTE: INITIALIZE EDIT FEEDBACK MODE, SET MODE STATE TO FALSE
    const [feedbackEdit, setFeedbackEdit] = useState({
        // the new edited feedback will go here in item
        item: {},
        // when we click the edit button this will turn true
        edit: false,
    })

    // NOTE: SET EDIT FEEDBACK MODE TO TRUE AFTER BUTTON CLICK
    function editFeedback(item) {
        setFeedbackEdit({
            item, // pass the object item {} to populate
            edit: true,
        })
    }

    // NOTE: UPDATE FEEDBACK AFTER SUBMITTED FORM
    function updateFeedback(id, updatedItem) {
        // NOTE: BEWARE:
        // loop thru each item
        // if item.id matches our id
        // then return all other items with our updated item
        // if not, just return all items
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...updatedItem } : item
            )
        )
        // reset edit state to false after sending updated item
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                addFeedback,
                deleteFeedback,
                // NOTE: check FeedbackForm.jsx
                feedbackEdit,
                // NOTE: check FeedbackItem.jsx
                editFeedback,
                // NOTE: check FeedbackForm.jsx
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
