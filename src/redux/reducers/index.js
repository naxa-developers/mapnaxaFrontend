import { combineReducers } from 'redux';
import layersReducers from './layersReducers'

const rootReducer = combineReducers(
    {
        layers: layersReducers
    }
);

export default rootReducer;
