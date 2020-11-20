import React from 'react'

const ErrorText = ({message}) => {
    return (
        <span style={{
            color:"red",
            textAlign:"center",
            fontSize:'13px'
        }}>
            {message}
        </span>
    )
}

export default ErrorText
