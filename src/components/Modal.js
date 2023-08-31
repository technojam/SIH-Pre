import React from "react";
import { data } from "../assets/SIHTheme";
import { useParams } from "react-router";
import "./Modal.css";


function Modal({closeModal}){
    const { themeId } = useParams();

  const reqData = data.filter((theme) => theme.id === themeId)[0].ps;

  if (!reqData)
    return (
      <div className="table-container">
        <h1>No Data Found</h1>
      </div>
    );

    return (<>


        <div className="bg"></div> 
        <div className="con">
       <div className="table">
        <button onClick={()=>closeModal(false) } >X</button>
        <table
          cellPadding="0"
          cellSpacing="0"
          border="0"
          className="data"
        >
            
          <thead>
            <tr>
              <th>Description</th>
              <td><div className="des">{data[0].ps[0].Description}</div></td> </tr>
              <tr><th>Organisation</th><td>{data[0].ps[0].Organization}</td></tr>
              <tr> <th>Category</th><td>{data[0].ps[0].Category}</td></tr>
              <tr><th>PS Number</th><td>{data[0].ps[0].PS_Number}</td></tr>
              <tr><th>Domain Bucket</th><td>{data[0].ps[0].Domain_Bucket}</td></tr>
             
          </thead>
        </table>
      </div>  </div>
      </>      
    );
}


export default Modal;