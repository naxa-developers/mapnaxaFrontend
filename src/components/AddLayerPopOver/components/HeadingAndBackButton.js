import React from 'react';
import { TiBackspace } from "react-icons/ti";


const HeadingAndBackButton = props => 
{
    return (
        <div style={{ display: 'flex'}}>
            <h3>Add Layer</h3>
            {/* The back button (close button) */}
            <TiBackspace 
                id="close" 
                style={{position:"relative", marginLeft: 'auto'}}  
                size='1.5em' 
                color="#ffffff"
                onClick={ props.hideAddLayerPopOver }
            />
        </div>
    );
};

export default HeadingAndBackButton;
