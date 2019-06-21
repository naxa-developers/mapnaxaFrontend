import { combineReducers } from 'redux';
import layersReducer from './layersReducer'

const rootReducer = combineReducers(
    {
        layers: layersReducer
    }
);

export default rootReducer;
