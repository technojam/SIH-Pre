import React, { Component } from 'react'
import ThemeItems from './ThemeItems'
import data from "../assets/SIHTheme";
import "./flip.css";

export default class NewsComponents extends Component {
  render() {
    console.log("render")
    return (
      <div style={{background: "#070c1d"}}>
            <h1 style={{color: "#ffffff"}} className='text-center' >THEMES</h1>

        <div className="container">
        <div className="row">
         {data.map((element, index)=>{   
           return <div className="col-md-4 my-4" key={index}>
            <ThemeItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,60):""}/>
            </div>
          })}
        </div>
        </div>
      </div>
    )
  }
}
