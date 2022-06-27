import React from 'react'
import vec1 from "../../assets/vec1.jpg"

const Block2 = () => {
  return (
    <div className='block2'>
        <img src={vec1} alt="vec1" style={{width:"500px"}}/>
        <div>
        <div style={{width:"70%", marginLeft:"15%"}}>
        <h1>It's helpful for operating system</h1>
            <ul>
                <li>
                    <h4>Ultra fast and secure</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </li>
                <li>
                    <h4>Allows customization</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </li>
                <li>
                    <h4>Smart Contract</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </li>
            </ul>
        </div>
            
        </div>
    </div>
  )
}

export default Block2