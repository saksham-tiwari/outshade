import React from 'react'
import InsightCard from './InsightCard'

const Block6 = () => {
  return (
    <div style={{ marginTop:"80px"}}>
        <h1 style={{textAlign:"center"}}>Latest Insight news</h1>
        <br/>
        <div style={{display:"flex", justifyContent:"space-evenly",width:"90%", marginLeft:"5%"}}>
            <InsightCard/>
            <InsightCard/>
        </div>
    </div>
  )
}

export default Block6