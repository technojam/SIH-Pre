import React, { Component } from 'react';
import "../components/flip.css"
export default class Items extends Component {
  render() {
    let { title, description, url,icon} = this.props;
    return (
      <div id='themes' className='con' >
        {/* Card Items for the card*/}
        <div className="card cardtheme" style={{ width: "17rem", height: "20rem" }}>
          <div className="card-body d-flex flex-column align-items-center text-center cartcolor">
            <div className='mb-4'>
              {/* <GiAutoRepair sx={{ fontSize: "80px", margin: "-2px" }} /> */}
              <div >{icon}</div>
            </div>
            <h5 className="card-title" style={{ fontWeight: "800", marginTop: "1rem" }}>{title}</h5>
            <p className="card-text" style={{ fontSize: "16px" }}>{description}...</p>
            <div className="mt-auto d-flex align-items-center">
              <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Explore</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
