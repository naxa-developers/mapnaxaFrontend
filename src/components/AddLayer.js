import React, { Component } from 'react';
import '../Css/newlayer.css'
import { IoIosAddCircle } from "react-icons/io";
import { TiBackspace } from "react-icons/ti";
import Button from '@material-ui/core/Button';
import 'animate.css'


class AddLayer extends Component 
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

       console.log( this.state );
    }

    handleFileAfterLoadingEnds = () =>
    {
        this.inputFileContentAsString = this.fileReader.result;

        // post to server will be done here
        const { layerName,category,dataSource } = this.state;
        const vectorLayer = {
            name: layerName,
            category,
            dataSource,
            style: {},
            fileData: this.inputFileContentAsString
        }
        console.log( vectorLayer );
    }

    postVectorLayerToServer = event =>
    {
        const { inputFile } = this.state;
        if ( inputFile == null || !inputFile.name.endsWith('.geojson') )
        {
            alert("You haven't chosen a valid file!!!")
            return;
        }
        this.fileReader = new FileReader();
        this.fileReader.onloadend = this.handleFileAfterLoadingEnds; // handleFileOnLoadEnd will be called as soon as the fileReader completes reading the file. Called on the next line 
        this.fileReader.readAsText( inputFile );
    }
    render()
    { 
        return (
            <div id="addLayerdiv" className="animated zoomIn faster" >
                <h3>Add Layer</h3>
                {/* The back button (close button) */}
                <TiBackspace 
                    id="close" 
                    style={{position:"absolute",marginLeft:265,marginTop:-70}}  
                    size='1.5em' 
                    color="#ffffff"
                    onClick={ this.props.hideAddLayerPopOver }
                />
                {/* Layer Name Input */}
                <label>
                    <p>Enter Layer Name</p>
                    <input 
                        placeholder="Filter By Field"  
                        style={{ borderRadius:5 }}
                        name="layerName"
                        value={ this.state.layerName }
                        onChange={ this.handleChange }
                    />
                </label>

                {/* The add category input datalist this is the list only */}
                <datalist id="category">
                    <option value="Education" />
                    <option value="Environment" />
                    <option value="Disaster" />
                    <option value="Development" />
                </datalist>
                {/* The add category input... The actual input not the list */}
                <label>
                    <p>Add Category</p>
                    {/* The id in this list has to match the category list's id */}
                    <input 
                        list="category" 
                        name="category" 
                        placeholder="Select category" 
                        style={{ borderRadius:5 }} 
                        onChange={ this.handleChange } 
                        id='spinner' 
                    />
                    <IoIosAddCircle size='1.5em' id='addicon' />
                </label>

                {/* The Data Source radio button inputs */}
                <label>
                    <p>Data Source</p>
                    <input 
                        type="radio" 
                        name="dataSource"
                        value="vector"  
                        onChange={ this.handleChange } 
                    /> Vector
                    <br />
                    <input 
                        type="radio" 
                        name="dataSource" 
                        value="raster"  
                        onChange={ this.handleChange } 
                    /> Raster<br />
                </label>

                {/* The Data Types radio button inputs */}
                <label>
                    <p>Data type</p>
                    <input 
                        type="radio" 
                        name="dataType" 
                        value="point"  
                        onChange={ this.handleChange }
                    /> Point
                    <br />

                    <input 
                        type="radio" 
                        name="dataType" 
                        value="line"  
                        onChange={ this.handleChange }
                    /> Line
                    <br />

                    <input 
                        type="radio" 
                        name="dataType" 
                        value="polygon"  
                        onChange={ this.handleChange }
                    /> Polygon
                    <br /><br />

                </label>

                {/* The button for the input file */}
                <label htmlFor="outlined-button-file">
                    <Button variant="contained" component="span" className="UploadButton">
                        Upload File
                    </Button>
                    {this.state.isUploadingFile && <div className="loader"/>}
                    {
                        this.state.inputFile && 
                        <p>{this.state.inputFile.name}</p>
                    }
                </label>
                {/* The actual input for fileinput. This is HIDDEN */}
                <input
                    accept=".*"
                    id="outlined-button-file"
                    multiple
                    type="file"
                    name="inputFile"
                    onChange={ this.handleChange }
                    hidden
                />

                {/* The latitude and longitude field selection area */}
                <p style={{ fontSize: 12 }}>Select Latitude and Latutude field from uploaded file</p>
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
                            onChange={ this.handleChange } 
                            style={{ width: 120,borderRadius:5 }} 
                        />
                    </div>
                    <div style={{ marginLeft: 5 }}>
                        <p>Select Longitude</p>
                        <input 
                            name="longitudeField" 
                            placeholder="Select Field" 
                            list="field"  
                            onChange={ this.handleChange } 
                            style={{ width: 120,borderRadius:5 }} 
                        />
                    </div>
                </div>

                {/* Discard and Add Layer Buttons section */}
                <div style={{ display:"flex", marginTop:10,justifyContent:'flex-start',alignContent:'center'}}>
                    <Button 
                        variant="outlined" 
                        style={ { marginRight:10,marginLeft:30,fontSize:10 } } 
                        onClick={ this.props.hideAddLayerPopOver }
                        >
                        Discard
                    </Button>

                    <Button 
                        variant="contained" 
                        color="secondary" 
                        style={{ fontSize:10 }} 
                        onClick={ this.postVectorLayerToServer }
                        >
                        Create Layer
                    </Button>
                </div>
            </div>
        );
    }
}

export default AddLayer;