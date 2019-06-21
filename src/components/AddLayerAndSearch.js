import React from 'react'
import { FaPlus, FaFilter, FaSearch } from 'react-icons/fa'
import LayerItems from './LayerItems'

const AddLayerAndSearch = props => 
{
    return (
        <div className="left-panel">
            <div className="btn-filter">
                <div className="left-panel__top">
                    <button 
                        className="nbtn nbtn-primary centerd"
                        onClick={ props.showAddLayerPopOver }
                        >
                        <FaPlus className="mmr-5" />
                        Add Layers
                    </button>
                    <div className="filter centered">
                        <FaFilter className="primary-color" />
                        <span> filter</span>
                    </div>
                </div>
                <div className="search">
                    <input
                        className="input-search"
                        type="text"
                        placeholder="115 items"
                    />
                    <div className="searchIcon">
                        <FaSearch />
                    </div>
                </div>
            </div>
            <LayerItems></LayerItems>
            
        </div>
    );
}

export default AddLayerAndSearch;
