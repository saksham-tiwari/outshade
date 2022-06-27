import React from 'react'
import Card from './Card'

const Block3 = () => {
  return (
    <div style={{textAlign:"center", marginTop:"80px"}}>
        <h1>We provide best features for customers</h1>
        <div style={{display:"flex", justifyContent:"space-around",width:"90%", marginLeft:"5%"}}>
            <Card i={0}/>
            <Card i={1}/>
            <Card i={2}/>
            <Card i={3}/>
        </div>
    </div>
  )
}

export default Block3