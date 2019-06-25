import React, { Component } from 'react';

class LayerItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Base: [{ LayerName: "OpenStreetMap", Category: 'Basemap' }, { LayerName: "BingMap", Category: 'Basemap' }],
            Layers: [{ LayerName: "Road", Category: 'layer' }, { LayerName: "River", Category: 'layer' }]

        }
    }
    render() {

        return (
            <div >
                <h3 style={{padding:0,margin:0}}>BaseMaps</h3>
                {this.state.Base.map((layer,i) => {
                    return(
                    <div className="base" key={i}>
                        <label>
                            <input type="radio" value={layer.LayerName} style={{marginLeft:10}} />
                            {layer.LayerName}
                        </label>
                    </div>)
                })}
                 <h3 style={{padding:0,margin:0}}>Layers</h3>
                {this.state.Layers.map((layer,i) => {
                    return(
                        <div  key={i}>
                            <input type='checkbox' value={layer.LayerName} style={{marginLeft:10}} />{layer.LayerName}
                        </div>
                    )
                })}
            </div>
            );
        }
    }
    
export default LayerItems;