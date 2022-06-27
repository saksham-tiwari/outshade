import React from 'react'
import { Button } from 'react-bootstrap'
import img from "../../assets/img1.jpeg"
import styles from "./imgBlock.module.css"

const ImgBlock = () => {
  return (
    <div>
        <img src={img} alt="imag" className={styles.image}/>
        <div className={styles.divImg}>
            <h1>Codext one of the best systems in SAAS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <Button style={{backgroundColor:"#41b4ee", borderColor:"#41b4ee", fontWeight:"bold"}}>Try a Live Demo</Button>
        </div>
    </div>
  )
}

export default ImgBlock