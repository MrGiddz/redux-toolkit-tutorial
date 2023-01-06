import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreameSlice'

export const IceCreamView = () => {
    const noOfIcecreams = useSelector(state => state.icecream.noOfIcecreams)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of icecreams - {noOfIcecreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order icecream</button>
        <button onClick={() => dispatch(restocked(2))}>Restock icecreams</button>
    </div>
  )
}
