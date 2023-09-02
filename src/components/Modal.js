import React from "react";
import { data } from "../assets/SIHTheme";
import { useParams } from "react-router";
import "./Modal.css";


function Modal({ closeModal, problemId }) {
  const { themeId } = useParams();

  const reqData = data.filter((theme) => theme.id === themeId)[0].ps;

  const psData = reqData.filter((problem) => problem.PS_Number === problemId)[0];

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
        <button onClick={() => closeModal(false)} >X</button>
        <table
          cellPadding="0"
          cellSpacing="0"
          border="0"
          className="data"
        >

          <thead>
            <tr>
              <th>Description</th>
              <td><div className="des">{psData.Description}</div></td> </tr>
            <tr><th>Organisation</th><td>{psData.Organization}</td></tr>
            <tr> <th>Category</th><td>{psData.Category}</td></tr>
            <tr><th>PS Number</th><td>{psData.PS_Number}</td></tr>
            <tr><th>Domain Bucket</th><td>{psData.Domain_Bucket}</td></tr>

          </thead>
        </table>
      </div>  </div>
  </>
  );
}


export default Modal;