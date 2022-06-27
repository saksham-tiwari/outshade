import React from 'react'
import graph from "../../assets/graph.png"
import styles from "./card.module.css"

const Card = (props) => {
    const fun = ()=>{
        let ele = document.querySelectorAll(".hover");
        ele[props.i].classList.add("hovered")
    }
    const fun2 = ()=>{
        let ele = document.querySelectorAll(".hover");
        ele[props.i].classList.remove("hovered")
    }
  return (
    <div className={styles.card} onMouseOver={fun} onMouseOut={fun2}>
        <img src={graph} alt="graph" className={styles.img}/>
        <div className="hover">
        <h4>Clean Code</h4>
        <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

    </div> 
  )
}

export default Card