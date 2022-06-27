import React from 'react'
import CardCaraousel from '../CardCaraousel/CardCaraousel'
import ReviewCard from './ReviewCard'

const Block5 = () => {
  return (
    <div style={{textAlign:"center", marginTop:"80px"}}>
        <h1>Let's see our User's Review</h1>
        <p style={{width:"50%", marginLeft:"25%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        {/* <div style={{display:"flex", justifyContent:"space-around",width:"90%", marginLeft:"5%"}}>
            {/* <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/> */}
        {/* </div> */}
        <CardCaraousel deviceType={"laptop"} style={{width:"90%", marginLeft:"5%"}}/>
        
    </div>
  )
}

export default Block5