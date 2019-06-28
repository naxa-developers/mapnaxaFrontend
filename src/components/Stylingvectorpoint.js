import React, { Component } from 'react';
import '../Css/vectorstyle.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { FaCircle } from 'react-icons/fa';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import { PhotoshopPicker } from 'react-color';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css"





class Stylingvectorpoint extends Component {

    constructor(props) {
        super(props)

        this.state = {
            symbology: 1,
            displayfillcolor: false,
            displaycolor: false,
            circular: {
                radius: 8,
                fillColor: "#ff7800",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            }
        }
    }

    handleChangeComplete = (color) => {

        if (this.state.displayfillcolor) {
            this.setState(prevState => {
                return { circular: { ...prevState.circular, fillColor: color.hex } };

            });
        };


        if (this.state.displaycolor) {
            this.setState(prevState => {
                return { circular: { ...prevState.circular, color: color.hex } };

            });
        };
    }


    render() {

        return (
            <div>
                <div style={{}} className="vectorstyleComp">

                    <h3>Style</h3>
                    <BottomNavigation
                        style={{ borderRadius: 6 }}
                        showLabels>
                        <BottomNavigationAction label="Circular" value="circular" style={this.state.symbology === 1 ? { backgroundColor: 'lightblue', borderRadius: 5 } : {}} onClick={() => {
                            this.setState({ symbology: 1 });
                        }
                        } icon={<FaCircle />} />
                        <BottomNavigationAction label="icons" value="icons" style={this.state.symbology === 2 ? { backgroundColor: 'lightblue', borderRadius: 5 } : {}} onClick={() => {
                            this.setState({ symbology: 2 });
                        }} icon={<FavoriteIcon />} />
                    </BottomNavigation>

                    {this.state.symbology === 1 && <div>
                        <div style={{ display: 'flex' }}>
                            <Button color="primary" >Color</Button><div style={{ width: 30, height: 30, backgroundColor: this.state.circular.color, display: 'flex', borderRadius: 5, marginLeft: 'auto' }} onClick={() => this.setState({ displaycolor: !this.state.displayfillcolor })}></div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Button color="primary" >FillColor</Button><div style={{ width: 30, height: 30, backgroundColor: this.state.circular.fillColor, display: 'flex', borderRadius: 5, marginLeft: 'auto' }} onClick={() => this.setState({ displayfillcolor: !this.state.displayfillcolor })}></div>

                        </div>


                        <p >Circle Radius:{this.state.circular.radius}</p><p>{}</p>
                        <InputRange
                            maxValue={20}
                            minValue={0}
                            value={this.state.circular.radius}
                            formatLabel={() => null}
                            onChange={value => this.setState(prevState => {
                                return { circular: { ...prevState.circular, radius: value } }
                            })} />
                        <p >Weight:{this.state.circular.weight}</p>
                        <InputRange

                            maxValue={20}
                            minValue={0}
                            formatLabel={() => null}
                            value={this.state.circular.weight}
                            onChange={value => this.setState(prevState => {
                                return { circular: { ...prevState.circular, weight: value } }
                            })} />
                        <p>Opacity:{this.state.circular.opacity.toFixed(1)}</p>
                        <InputRange
                            step={0.1}
                            maxValue={1}
                            minValue={0}
                            value={this.state.circular.opacity}
                            formatLabel={() => null}
                            onChange={value => this.setState(prevState => {
                                return { circular: { ...prevState.circular, opacity: value } }
                            })} />
                        <p>Fill Opacity:{this.state.circular.fillOpacity.toFixed(1)}</p>
                        <InputRange
                            step={0.1}
                            maxValue={1}
                            minValue={0}
                            formatLabel={() => null}
                            value={this.state.circular.fillOpacity}
                            onChange={value => this.setState(prevState => {
                                return { circular: { ...prevState.circular, fillOpacity: value } }
                            })} />


                    </div>


                    }
                    {/* if icons to be chosen */}
                    {this.state.symbology === 2 && <div></div>

                    }


                    <div style={{ display: "flex", justifyContent: 'space-evenly', marginTop: 5 }}>
                        <Button variant="outlined" color="secondary" >
                            Save
                    </Button>
                        <Button variant="outlined" color="secondary" >
                            Apply
                    </Button>
                    </div>

                </div>
                <div style={{ marginLeft: "100%", marginTop: "-150%", position: "absolute", width: 20 }}>
                    {this.state.displayfillcolor && <PhotoshopPicker color={this.state.circular.fillColor} onAccept={() => this.setState({ displayfillcolor: false })} onCancel={() => this.setState({ displayfillcolor: false })} onChange={this.handleChangeComplete} />}
                </div>

                <div style={{ marginLeft: "100%", marginTop: "-150%", position: "absolute", width: 20 }}>
                    {this.state.displaycolor && <PhotoshopPicker color={this.state.circular.color} onAccept={() => this.setState({ displaycolor: false })} onCancel={() => this.setState({ displaycolor: false })} onChange={this.handleChangeComplete} />}
                </div>


            </div>

        );
    }
}

export default Stylingvectorpoint;