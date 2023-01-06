import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    noOfIcecreams: 20
}

const iceCreamSlice = createSlice({
    name: 'Icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.noOfIcecreams--
        },
        restocked: (state, actions) => {
            state.noOfIcecreams += actions.payload
        }
    }
})

export default iceCreamSlice.reducer
export const {ordered, restocked} =  iceCreamSlice.actions