import React from 'react'
import Button from '@material-ui/core/Button';


const CreateOrDiscardBtns = props => {
    return (
        <div style={{ display:"flex", marginTop:10,justifyContent:'flex-start',alignContent:'center'}}>
            <Button 
                variant="outlined" 
                style={ { marginRight:10,marginLeft:30,fontSize:10 } } 
                onClick={ props.hideAddLayerPopOver }
                >
                Discard
            </Button>

            <Button 
                variant="contained" 
                color="secondary" 
                style={{ fontSize:10 }} 
                onClick={ props.postLayerToServer }
                >
                Create Layer
            </Button>
        </div>
    )
}

export default CreateOrDiscardBtns
