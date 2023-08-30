import React, { Component } from 'react'
import ThemeItems from './ThemeItems'
import data from "../assets/SIHTheme";
import "./flip.css";
export default class NewsComponents extends Component {
  render() {
    console.log("render")
    return (
      <div style={{background: "#070c1d"}} >
            <h1 style={{color: "#ffffff"}} className='text-center' >THEMES</h1>
        <div className="container">
        <div className="row">
         {data.map((element, index)=>{   
           return <div className="col-md-3 my-3 " key={index}>
            <ThemeItems title={element.title} description={element.description?element.description.slice(0,55):"" } url={element.url} icon = {element.icon} />
            </div>
          })}
        </div>
        </div>
      </div>
    )
  }
}
