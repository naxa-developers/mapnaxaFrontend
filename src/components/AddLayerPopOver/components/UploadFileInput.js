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
                    props.validFileIsChosen
                    && 
                    <p style={{ fontStyle: 'italic', fontSize: 13, color: 'white' }}>
                        { props.isUploadingFile ? "Uploading": "Uploaded"}: {props.inputFileName}
                    </p>
                }
            </label>
            {/* The actual input for fileinput. This is HIDDEN */}
            <input
                accept={ props.dataSource === "vector" ? ".geojson" : ".tiff"}
                id="outlined-button-file"
                type="file"
                name="inputFile"
                onChange={ props.handleChange }
                ref={ props.fileInputRef }
                multiple  
                hidden
            />
        </div>
    )
}

export default UploadFileInput
