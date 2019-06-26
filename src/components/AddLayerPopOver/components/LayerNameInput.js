import React from 'react'

const LayerNameInput = props => {
    return (
        <label>
            <p>Enter Layer Name</p>
            <input 
                placeholder="Filter By Field"  
                style={{ borderRadius:5 }}
                name="layerName"
                value={ props.layerName }
                onChange={ props.handleChange }
            />
        </label>
    );
};

export default LayerNameInput;

