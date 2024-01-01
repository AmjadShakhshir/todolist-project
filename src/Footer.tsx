import React from 'react'

const Footer = ({ length }: { length:number }) => {
    return (
        <footer>
            { length === 1 ? (
                <p>You have {length} item in your list.</p>
            ) : (
                <p>You have {length} items in your list.</p>
            )}
        </footer>
    )
}

export default Footer