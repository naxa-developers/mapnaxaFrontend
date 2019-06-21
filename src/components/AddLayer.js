import React, { Component } from 'react';
import '../Css/newlayer.css'
import { IoIosAddCircle } from "react-icons/io";
import Button from '@material-ui/core/Button';


class AddLayer extends Component 
{
    render() 
    { 
        return (
            <div className="addLayerdiv">
                <h3>Add Layer</h3>
                <p>Enter Layer Name</p>
                <input placeholder="Filter By Field" style={{borderRadius:5}}></input>
                <p>Add Category</p>
                <datalist id="category">
                    <option value="Education" />
                    <option value="Environment" />
                    <option value="Disaster" />
                    <option value="Development " />
                </datalist>
                <label>
                    <input list="category" name="Ncategory" placeholder="Select category" style={{borderRadius:5}} id='spinner' />
                    <IoIosAddCircle size='1.5em' id='addicon' />
                </label>
                <p>Data Source</p>
                <input type="radio" name="datasource" value="Vector" /> Vector<br />
                <input type="radio" name="datasource" value="Raster"  /> Raster<br />

                <p>Data type</p>
                <input type="radio" name="datatype" value="Vector" /> Point<br />
                <input type="radio" name="datatype" value="Raster" /> Line<br />
                <input type="radio" name="datatype" value="Raster" /> Polygon<br /><br />


                <label htmlFor="outlined-button-file">
                    <Button variant="contained" component="span" className="UploadButton">
                        Upload File
                    </Button>
                </label>
                <input
                    accept="image/*"
                    id="outlined-button-file"
                    multiple
                    type="file"
                    hidden
                />
                <div class="loader"></div>
                <p>"this.state.uploading"</p>

                <p style={{ fontSize: 12 }}>Select Latitude and Latutude field from uploaded file</p>
                <datalist id="field">
                    <option value="Easting" />
                    <option value="Northing" />
                    <option value="Height" />
                </datalist>

                <div style={{ display: "flex", flexDirection: 'row' }}>
                    <div>
                        <p>Select Latitude</p>
                        <input list="" style={{ width: 120,borderRadius:5 }} name="Nlat" placeholder="Select Field" id='spinner' list="field"/>
                    </div>
                    <div style={{ marginLeft: 5 }}>
                        <p>Select Longitude</p>
                        <input list="" name="Nlon" placeholder="Select Field" id='spinner' style={{ width: 120,borderRadius:5 }} list="field" />
                    </div>
                </div>

                <div style={{ display:"flex", marginTop:10,justifyContent:'flex-start',alignContent:'center'}}>
                    <Button variant="outlined" style={{marginRight:10,marginLeft:30,fontSize:10}} >
                        Discard
                    </Button>
                    <Button variant="contained" color="secondary" style={{fontSize:10}}  >
                        Create Layer
                    </Button>
                </div>
            </div>
        );
    }
}

export default AddLayer;