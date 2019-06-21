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
                {this.state.Base.map((e) => {
                    return(
                    <div className="base">
                        <label>
                            <input type="radio" value={e.LayerName} style={{marginLeft:10}} />
                            {e.LayerName}
                        </label>
                    </div>)
                })}
                 <h3 style={{padding:0,margin:0}}>Layers</h3>
                {this.state.Layers.map((e) => {
                    return(
                        <div>
                            <input type='checkbox' value={e.LayerName} style={{marginLeft:10}} />{e.LayerName}
                        </div>
                        
                        
                
                    )
                })}
            </div>
            );
        }
    }
    
export default LayerItems;