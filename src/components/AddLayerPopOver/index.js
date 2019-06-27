import React, { Component,createRef } from 'react';
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
        this.inputFile = null;
        this.inputFileContentAsString = "";
        this.fileInputRef = createRef();
        this.state = {
            layerName: "",
            category: "",
            dataSource: "", // vector or raster
            dataType: "", // point or line or polygon
            latitudeField: "",
            longitudeField: "",
            inputFileName: "",
            validFileIsChosen: false,
            isUploadingFile: false
        };
    }

    // function to handle changes for every input in this add layer form
    handleChange = event => 
    {
        const { name,value,type } = event.target;
        // debugger;
        // to handle input on file and other differently
        if ( type === "file" )  
        {
            if ( event.target.files[0] == null )
            {
                console.log("No file selected");
                return; // if no file is selected, posting and setting state shouldn't be done Hence, return;
            }
            this.inputFile = event.target.files[0] // event.target.files[0] return the file object for file-type input
            this.setState({ inputFileName: this.inputFile.name });
            this.uploadLayerToServer( event );
        }    
        else
        {
            this.setState({ [name]: value })
        }
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
            fileData: this.inputFileContentAsString,
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
        console.log( "Post Data Before Sending:",layer );

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
            .then( data => 
                {
                    console.log(data)
                    this.setState({isUploadingFile: false, validFileIsChosen: true});
                    this.fileInputRef.current.value = ""
                })
            .catch( error => 
                {
                    this.setState({isUploadingFile: false, inputFileName: "", validFileIsChosen: false});
                    this.fileInputRef.current.value = ""
                    alert( error.message );
                })
    }

    // function to upload the file to database with a post request made to the server
    uploadLayerToServer = event =>
    {
        // debugger;
        // checking if no file is chosen
        if ( this.inputFile == null )
        {
            alert( "Choose a file to upload!" );
            return;
        }
        // assigning a new FileReader instance to this.fileReader
        this.fileReader = new FileReader();
        
        //calling appropriate file reading functions according to dataSource Raster or Vector
        switch ( this.state.dataSource )
        {
        case "vector":
            if ( !this.inputFile.name.endsWith('.geojson') )
            {
                alert( "File has to be a geojson file" )
                return;
            }
            this.fileReader.readAsText( this.inputFile );
            break;

        case "raster":
            if ( !this.inputFile.name.endsWith('.tiff') )
            {
                alert( "File has to be a tiff file" )
                return;
            }
            this.fileReader.readAsDataURL( this.inputFile );
            break;

        default:
            alert("Choose a data source");
            event.target.value = "" // if not set to "" and the user selects a data source, the uploadFile input won't change and the postLayerToServer won't be called 
            return;
        }
        // the code here doesn't run if no data source is selected in which case the function return null from default switch case
        this.setState({ isUploadingFile: true, validFileIsChosen: true });

        this.fileReader.onloadend = this.handleFileAfterLoadingEnds; // handleFileOnLoadEnd will be called as soon as the fileReader completes reading the file. Called on the next line 
    }

    createLayer = () =>
    {
        console.log("Add layer yet to be handled! Sorry Bro!");
        this.props.hideAddLayerPopOver();
    }

    render()
    { 
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
                    fileInputRef={this.fileInputRef}
                    isUploadingFile={ this.state.isUploadingFile }
                    inputFileName={ this.state.inputFileName }
                    validFileIsChosen={ this.state.validFileIsChosen }
                    dataSource={ this.state.dataSource }
                    handleChange={ this.handleChange }
                />
                <LatLngFieldInput
                    handleChange={ this.handleChange }
                />
                {/* Discard and Create Layer Buttons section */}
                <CreateOrDiscardBtns 
                    hideAddLayerPopOver={ this.props.hideAddLayerPopOver }
                    createLayer={ this.createLayer }
                />
            </div>
        );
    }
}

export default AddLayerPopOver;