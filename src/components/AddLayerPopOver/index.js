import React, { Component } from 'react';
import 'animate.css'

import './addLayerPopOver.css'
import HeadingAndBackButton from './components/HeadingAndBackButton';
import LayerNameInput from './components/LayerNameInput';
import CategoryInput from './components/CategoryInput';
import DataSourceInput from './components/DataSourceInput';
import DataTypeInput from './components/DataTypeInput';
import UploadFileInput from './components/UploadFileInput';
import LatLngFieldInput from './components/LatLngFieldInput';
import CreateOrDiscardBtns from './components/CreateOrDiscardBtns';

class AddLayerPopOver extends Component 
{
    constructor()
    {
        super();
        this.fileReader = null;
        this.inputFileContentAsString = "";
        this.state = {
            layerName: "",
            category: "",
            dataSource: "", // vector or raster
            dataType: "", // point or line or polygon
            latitudeField: "",
            longitudeField: "",
            inputFile: null,
            isUploadingFile: true
        };
    }

    // function to handle changes for every input in this add layer form
    handleChange = event => 
    {
        const { name,value,type } = event.target;
        // to handle input on file and other differently
        ( type === "file" ) ? 
            this.setState({ [name]: event.target.files[0] }) // event.target.files[0] return the file object for file-type input
            :
            this.setState({ [name]: value })

    //    console.log( this.state );
    }

    // function to gathering the information of the form
    getPostDataForNewLayer = () =>
    {
        const { layerName,category,dataSource } = this.state;
        let postData = {
            name: layerName,
            category,
            dataSource,
            fileData: this.inputFileContentAsString
        }
        // adding style or classification based on the dataSource raster or vector
        dataSource === "vector" ? postData.style ={} : postData.classification = ""
        return postData;
    }

    // function to data posting it to the server
    handleFileAfterLoadingEnds = () =>
    {
        this.inputFileContentAsString = this.fileReader.result;

        // getting the post data gathered from the form
        const layer = this.getPostDataForNewLayer();
        // console.log( layer );

        // setting up the post url and options
        const url = "http://localhost:8081/api";
        const options = {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify( layer )
        };
        // sending post request
        fetch( url, options )
            .then( response => response.json() )
            .then( data => console.log(data) )
            .catch( error => alert( error.message ) )
    }

    postLayerToServer = event =>
    {
        // checking if no file is chosen
        if ( this.state.inputFile == null )
        {
            alert( "Choose a file to upload!" );
            return;
        }
        // assigning a new FileReader instance to this.fileReader
        this.fileReader = new FileReader();
        this.fileReader.onloadend = this.handleFileAfterLoadingEnds; // handleFileOnLoadEnd will be called as soon as the fileReader completes reading the file. Called on the next line 

        //calling appropriate file reading functions according to dataSource Raster or Vector
        switch ( this.state.dataSource )
        {
        case "vector":
            if ( !this.state.inputFile.name.endsWith('.geojson') )
            {
                alert( "File has to be a geojson file" )
                return;
            }
            this.fileReader.readAsText( this.state.inputFile );
            break;

        case "raster":
            if ( !this.state.inputFile.name.endsWith('.tiff') )
            {
                alert( "File has to be a tiff file" )
                return;
            }
            this.fileReader.readAsDataURL( this.state.inputFile );
            break;
        default:
            alert("Choose a data source");
            return;
        }
        
        this.props.hideAddLayerPopOver();
    }

    render()
    { 
        console.log( this.state );
        return (
            <div id="addLayerdiv" className="animated zoomIn faster" >
                <HeadingAndBackButton
                    hideAddLayerPopOver={ this.props.hideAddLayerPopOver } 
                />
                <LayerNameInput 
                    layerName={ this.state.layerName }
                    handleChange={ this.handleChange }
                />
                <CategoryInput 
                    handleChange={ this.handleChange }
                />
                {/* The Data Source ( Raster or Vector ) radio button inputs */}
                <DataSourceInput
                    handleChange={ this.handleChange }
                />
                {/* The Data Types ( Point/Line/Polygon ) radio button inputs for vector layer*/}
                {
                    ( this.state.dataSource === "vector" ) 
                    &&
                    <DataTypeInput 
                        handleChange={ this.handleChange }
                    />
                }
                <UploadFileInput 
                    isUploadingFile={ this.state.isUploadingFile }
                    inputFile={ this.state.inputFile }
                    dataSource={ this.state.dataSource }
                    handleChange={ this.handleChange }
                />
                <LatLngFieldInput
                    handleChange={ this.handleChange }
                />
                {/* Discard and Create Layer Buttons section */}
                <CreateOrDiscardBtns 
                    hideAddLayerPopOver={ this.props.hideAddLayerPopOver }
                    postLayerToServer={ this.postLayerToServer }
                />
            </div>
        );
    }
}

export default AddLayerPopOver;