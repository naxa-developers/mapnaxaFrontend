import React from 'react';
import Button from '@material-ui/core/Button';


const UploadFileInput = props => {
    return (
        <div>
            {/* The button for the input file */}
            <label htmlFor="outlined-button-file">
                <Button variant="contained" component="span" className="UploadButton">
                    Upload File
                </Button>
                { props.isUploadingFile && <div className="loader"/> }
                {
                    props.inputFile 
                    && 
                    <p style={{ fontStyle: 'italic', fontSize: 13, color: 'white' }}>
                        Chosen File: {props.inputFile.name}
                    </p>
                }
            </label>
            {/* The actual input for fileinput. This is HIDDEN */}
            <input
                accept={ props.dataSource === "vector" ? ".geojson" : ".tiff"}
                id="outlined-button-file"
                type="file"
                name="inputFile"
                multiple
                onChange={ props.handleChange }
                hidden
            />
        </div>
    )
}

export default UploadFileInput
