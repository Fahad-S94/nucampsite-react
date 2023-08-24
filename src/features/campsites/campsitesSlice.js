import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    campsiteArray: CAMPSITES
}

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
    
})

export const campsitesReducer = campsitesSlice.reducer

export const selectAllCampsites = (state) => {
    return state.campsites.campsiteArray;
}

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// }

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsiteArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
}

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsiteArray.find(campsite => campsite.featured);
}