import React from 'react'
import Card2 from '../block3/Card2'

const Block4 = () => {
  return (
    <div style={{textAlign:"center", marginTop:"80px"}}>
        <h1>Choose your best pricing plan</h1>
        <div style={{display:"flex", justifyContent:"space-around",width:"90%", marginLeft:"5%"}}>
            <Card2 i={0}/>
            <Card2 i={1}/>
            <Card2 i={2}/>
        </div>
    </div>
  )
}

export default Block4