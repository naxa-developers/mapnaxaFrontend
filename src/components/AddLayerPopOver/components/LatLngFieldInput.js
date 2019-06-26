import React from 'react'

const LatLngFieldInput = props => 
{
    return (
        <div style={{fontSize: 14}}>
            <p>Select Latitude and Latutude field <br/>from uploaded file</p>
            {/* the dropdown item list for the lat long field. Later will have to read from the csv files column names */}
            <datalist id="field">
                <option value="Easting" />
                <option value="Northing" />
                <option value="Height" />
            </datalist>

            {/* Div containing the select lat lng field inputs */}
            <div style={{ display: "flex", flexDirection: 'row' }}>
                <div>
                    <p>Select Latitude</p>
                    <input
                        name="latitudeField"
                        placeholder="Select Field"
                        list="field"
                        onChange={props.handleChange}
                        style={{ width: 120, borderRadius: 5 }}
                    />
                </div>
                <div style={{ marginLeft: 5 }}>
                    <p>Select Longitude</p>
                    <input
                        name="longitudeField"
                        placeholder="Select Field"
                        list="field"
                        onChange={props.handleChange}
                        style={{ width: 120, borderRadius: 5 }}
                    />
                </div>
            </div>
        </div>
    );
}

export default LatLngFieldInput
