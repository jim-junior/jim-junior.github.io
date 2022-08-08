
import React, {useState, useEffect, useRef} from 'react'
import {render3D} from "./headerScene"

const Header = () => {
  const header = useRef(null)
  useEffect(()=> {
    render3D(header.current)
  },[])
  return (
    <header ref={header} id="header"></header>
  )
}

export default Header