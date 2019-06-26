import React, { Component } from 'react'
import AddLayerAndSearch from './AddLayerAndSearch';
import AddLayer from './AddLayer'
import{Route,Switch,Link} from 'react-router-dom'
import Point from '../components/Stylingvectorpoint'
import  '../Css/sidebar.css';


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
                <div id="stylingRoute">
                    <Point/>


                </div>

                
            </div>
        );
    }
}

export default Sidebar;
