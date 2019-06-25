import React, { Component } from 'react'
import AddLayerAndSearch from './AddLayerAndSearch';
import AddLayer from './AddLayer'

class Sidebar extends Component 
{
    constructor( props )
    {
        super( props );
        this.state = {
            addLayerPopOverIsShown: false
        }
    }

    showAddLayerPopOver = () =>
    {
        this.setState({ addLayerPopOverIsShown: true });
    }
    hideAddLayerPopOver = ( event ) =>
    {
        this.setState({ addLayerPopOverIsShown: false });
    }
    render()
    {
        return (
            <div>
                <AddLayerAndSearch showAddLayerPopOver={ this.showAddLayerPopOver } />
                {
                    this.state.addLayerPopOverIsShown && 
                    <AddLayer hideAddLayerPopOver={ this.hideAddLayerPopOver } />
                }
                
            </div>
        );
    }
}

export default Sidebar;
