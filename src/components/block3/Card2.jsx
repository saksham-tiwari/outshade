import React from 'react'
import { Button } from 'react-bootstrap'
import graph from "../../assets/graph.png"
import styles from "./card.module.css"

const Card2 = (props) => {
    const fun = ()=>{
        let ele = document.querySelectorAll(".hover2");
        ele[props.i].classList.add("hovered")
    }
    const fun2 = ()=>{
        let ele = document.querySelectorAll(".hover2");
        ele[props.i].classList.remove("hovered")
    }
  return (
    <div className={`${styles.card} ${styles.card2}`} onMouseOver={fun} onMouseOut={fun2}>
        <div className="hover2">
        <p>Classic</p>
        <hr></hr>
        <h3>$30.00/mo</h3>
        </div>
        <ul>
            <li>Easily customizable</li>
            <li>Commercial license</li>
            <li>5 user licence</li>
            <li>Hotline support 24/7</li>
        </ul>
        <Button style={{backgroundColor:"#41b4ee", borderColor:"#41b4ee", fontWeight:"bold"}}>Try this package</Button>

    </div> 
  )
}

export default Card2