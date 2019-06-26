import React from 'react'

const DataTypeInput = props => {
    return (
        <div>
            <p>Data type</p>

            <input 
                type="radio" 
                name="dataType" 
                value="point"  
                onChange={ props.handleChange }
            /> Point
            <br />

            <input 
                type="radio" 
                name="dataType" 
                value="line"  
                onChange={ props.handleChange }
            /> Line
            <br />

            <input 
                type="radio" 
                name="dataType" 
                value="polygon"  
                onChange={ props.handleChange }
            /> Polygon
            <br /><br />

        </div>
    )
}

export default DataTypeInput
