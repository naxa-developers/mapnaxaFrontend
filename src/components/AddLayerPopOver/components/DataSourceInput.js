import React from 'react'

const DataSourceInput = props => 
{
    return (
        <label>
            <p>Data Source</p>
            <input 
                type="radio" 
                name="dataSource"
                value="vector"  
                onChange={ props.handleChange } 
            /> Vector
            <br />
            <input 
                type="radio" 
                name="dataSource" 
                value="raster"  
                onChange={ props.handleChange } 
            /> Raster<br />
        </label>
    )
}

export default DataSourceInput
