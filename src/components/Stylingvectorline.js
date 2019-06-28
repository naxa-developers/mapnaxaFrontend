import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import InputRange from 'react-input-range';
import { PhotoshopPicker } from 'react-color';
import TextField from '@material-ui/core/TextField';




class Stylingvectorline extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displaycolor: false,
            style: {
                weight: 2,
                opacity: 0.4,
                color: 'red',
                dashArray: ''

            }
        }
    }

    handleChangeComplete = (color) => {


        this.setState(prevState => {
            return { style: { ...prevState.style, color: color.hex } };

        });

    }

    render() {
        return (
            <div>
                <h1>Hello Line</h1>
                <div style={{ display: 'flex',backgroundColor:"#E9E3E3",padding:5}}>
                    <Button color="primary" >Color</Button><div style={{ width: 30, height: 30, backgroundColor: this.state.style.color, marginLeft: 'auto', display: 'flex', borderRadius: 5,alignItems:'center' }} onClick={() => this.setState({ displaycolor: !this.state.displaycolor })}></div>
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
                <TextField
                    id="standard-name"
                    label="Dasharray"
                    onChange={(val) => this.setState(prevState => { return { style: { ...prevState.style, dashArray: val } } })}
                    margin="normal"
                    placeholder="eg: 2,1"
                />
                <div style={{ display: "flex", justifyContent: 'space-evenly', marginTop: 5 }}>
                    <Button variant="outlined" color="secondary" >
                        Save
                    </Button>
                    <Button variant="outlined" color="secondary" >
                        Apply
                    </Button>
                </div>


                <div style={{ marginLeft: "101%", marginTop: "-115%", position: "absolute", width: 20 }}>
                    {this.state.displaycolor && <PhotoshopPicker color={this.state.style.color} onAccept={() => this.setState({ displaycolor: false })} onCancel={() => this.setState({ displaycolor: false })} onChange={this.handleChangeComplete} />}
                </div>
            </div>
        );
    }
}

export default Stylingvectorline;