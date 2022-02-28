import { motion, AnimatePresence } from 'framer-motion'
import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
// useContext
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    // useContext
    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No feedback available.</p>
    }

    return (
        // HERE CAN BE IMPLEMENTED A FRAMER MOTION ANIMATION
        // RIGHT WHERE WE LOOP THRU THE FEEDBACK LIST
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )

    // NO ANIMATION
    // return (
    //     <div className="feedback-list">
    //         {feedback.map((item) => (
    //             <FeedbackItem
    //                 key={item.id}
    //                 item={item}
    //                 handleDelete={handleDelete}
    //             />
    //         ))}
    //     </div>
    // )
}

export default FeedbackList
