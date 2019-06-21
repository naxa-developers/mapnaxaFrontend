import { ADD_LAYER,REMOVE_LAYER } from '../actions/types';

const initialState = {
    layers: [
        {
            id: 1,
            name: "Bridges",
            catogory: "Constructions"
        }
    ]
}

export default ( state=initialState, action ) => 
{
    switch ( action.type )
    {
    case ADD_LAYER:

        return {
            layers: [ newLayer, ...state.layer ]
        }

    case REMOVE_LAYER:

        const filtered = state.layers.filter( layer => layer.id !== action.id )
        return {
            layers: filtered
        }

    default:
        
        return state;
    }
}