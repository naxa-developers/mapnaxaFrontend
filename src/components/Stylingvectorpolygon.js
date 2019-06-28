import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import InputRange from 'react-input-range';
import { PhotoshopPicker } from 'react-color';



class Stylingvectorpolygon extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayfillcolor: false,
            displaycolor: false,
            style: {
                weight: 2,
                opacity: 1,
                color: 'blue',
                fillOpacity: 0.7,
                fillColor: '#FFA000'
            }
        };
    };

    handleChangeComplete = (color) => {
        if (this.state.displayfillcolor) {
            this.setState(prevState => {
                return { style: { ...prevState.style, fillColor: color.hex } };

            });
        };


        if (this.state.displaycolor) {
            this.setState(prevState => {
                return { style: { ...prevState.style, color: color.hex } };

            });
        };
    }

    render() {
        return (
            <div style={{ padding: 6,paddingTop:0 , borderRadius: 5 }}>
                <h3 style={{backgroundColor:'',width:"100%",padding:5}}>Style</h3>
                <div style={{ display: 'flex' }}>
                    <Button color="primary" >FillColor</Button><div style={{ width: 30, height: 30,marginLeft:10, backgroundColor: this.state.style.fillColor, display: 'flex', borderRadius: 5,marginLeft:'auto' }} onClick={() => this.setState({ displayfillcolor: !this.state.displayfillcolor })}></div>
                </div>

                <div style={{ display: 'flex' }}>
                    <Button color="primary" >Color</Button><div style={{ width: 30, height: 30, backgroundColor: this.state.style.color, display: 'flex', borderRadius: 5,marginLeft:'auto' }} onClick={() => this.setState({ displaycolor: !this.state.displayfillcolor })}></div>
                </div>

                <p >Weight:{this.state.style.weight}</p>
                <InputRange

                    maxValue={20}
                    minValue={0}
                    formatLabel={() => null}
                    value={this.state.style.weight}
                    onChange={value => this.setState(prevState => {
                        return { style: { ...prevState.style, weight: value } }
                    })} />
                <p>Opacity:{this.state.style.opacity.toFixed(1)}</p>
                <InputRange
                    step={0.1}
                    maxValue={1}
                    minValue={0}
                    value={this.state.style.opacity}
                    formatLabel={() => null}
                    onChange={value => this.setState(prevState => {
                        return { style: { ...prevState.style, opacity: value } }
                    })} />
                <p>Fill Opacity:{this.state.style.fillOpacity.toFixed(1)}</p>
                <InputRange
                    step={0.1}
                    maxValue={1}
                    minValue={0}
                    formatLabel={() => null}
                    value={this.state.style.fillOpacity}
                    onChange={value => this.setState(prevState => {
                        return { style: { ...prevState.style, fillOpacity: value } }
                    })} />

                <div style={{display:"flex", justifyContent:'space-evenly',marginTop:5}}>
                    <Button variant="outlined" color="secondary" >
                        Done
                    </Button>
                    <Button variant="outlined" color="secondary" >
                        Save
                    </Button>
                </div>

             
                <div style={{ marginLeft: "99%", marginTop: "-115%", position: "absolute", width: 20 }}>
                    {this.state.displayfillcolor && <PhotoshopPicker color={this.state.style.fillColor} onAccept={() => this.setState({ displayfillcolor: false })} onCancel={() => this.setState({ displayfillcolor: false })} onChange={this.handleChangeComplete} />}
                </div>

                <div style={{ marginLeft: "100%", marginTop: "-150%", position: "absolute", width: 20 }}>
                    {this.state.displaycolor && <PhotoshopPicker color={this.state.style.color} onAccept={() => this.setState({ displaycolor: false })} onCancel={() => this.setState({ displaycolor: false })} onChange={this.handleChangeComplete} />}
                </div>






            </div>
        );
    }
}

export default Stylingvectorpolygon;