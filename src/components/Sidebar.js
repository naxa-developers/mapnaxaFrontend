import React, { Component } from 'react'
import AddLayerAndSearch from './AddLayerAndSearch';

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
        console.log( this.state.addLayerPopOverIsShown );
        this.setState({ addLayerPopOverIsShown: true });
    }
    hideAddLayerPopOver = ( event ) =>
    {
        if ( event.currentTarget === event.target )
        {
            this.setState({ addLayerPopOverIsShown: false });
        }
    }
    render() 
    {
        return (
            <div>
                <AddLayerAndSearch showAddLayerPopOver={ this.showAddLayerPopOver } />
            </div>
        );
    }
}

export default Sidebar;
