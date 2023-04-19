import React from "react";
import "../styles/Footer.scss"
import QA from "../assets/QA.png"
import time from "../assets/time.png"
import paper from "../assets/paper.svg"
import person from "../assets/person.png"

function Footer(){
  return(
    <div className="bottom">
      <div><img src={QA}/><br/>Q&A</div>
      <div><img src={time}/><br/>소요시간 안내</div>
      <div className="progress"><img src={paper} height={24}/><br/>대낙 진행상황</div>
      <div><img src={person}/><br/>1:1대화</div>
    </div>
  )
}

export default Footer;