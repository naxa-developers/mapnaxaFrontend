import React from 'react'

const Input = ({ name, type, label, onChange, onBlur, value, error }) => {
    return (
        <div key={ name }>
            <p>{ label }</p>
            <input
                name={name}
                type={ type || 'text'}
                value={value}
                onChange={onChange}
                onBlur={onBlur} 
            />
            <p style={{color: 'red', fontSize: 12, fontStyle: 'italic'}}>{ error }</p>
        </div>
    )
}

export default Input
