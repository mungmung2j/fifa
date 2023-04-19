import React from "react";
import "../styles/Header.scss"
import logo from "../assets/logo.svg"
import kakao from "../assets/kakao.svg"

function Header(){
  return(
    <div className="top">
      <span>피파대낙닷컴</span><img src={logo}/><a className="kakao" href="/"><img src={kakao}/></a>
    </div>
  )
}

export default Header;