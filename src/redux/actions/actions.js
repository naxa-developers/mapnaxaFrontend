import { ADD_LAYER,REMOVE_LAYER } from './types';

export const addLayer = newLayer => 
{
    return { type: ADD_LAYER, newLayer }
}

export const REMOVE_LAYER = id => 
{
    return { type: REMOVE_LAYER, id }
}