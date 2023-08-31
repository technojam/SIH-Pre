import React from "react";
import { data } from "../assets/SIHTheme";
import { useParams } from "react-router";
import "./ProbStaTable.css";
import { useState } from "react";

import Modal from "./Modal";

const ProbStaTable = () => {
  
	const [openModal, setOpenModal]=useState(false);
  const { themeId } = useParams();

  const reqData = data.filter((theme) => theme.id === themeId)[0].ps;

  if (!reqData)
    return (
      <div className="table-container">
        <h1>No Data Found</h1>
      </div>
    );

  return (
    <>{openModal && <Modal closeModal={setOpenModal}/>}
  
  <div className="mainc">
      <div className="table-container">
        <table
          cellPadding="0"
          cellSpacing="0"
          border="0"
          className="data-table"
        >
          <thead>
            <tr>
              <th>S No.</th>
              <th>Organisation</th>
              <th>Problem Statement</th>
              <th>Category</th>
              <th>PS Number</th>
              <th>Domain Bucket</th>
            </tr>
          </thead>
          <tbody>
            {reqData.map((ps, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{ps.Organization}</td>
                <td><p onClick={()=>{setOpenModal(true);}}>
					{ps.Problem_Statement_Title}</p></td>	  
                <td>{ps.Category}</td>
                <td>{ps.PS_Number}</td>
                <td>{ps.Domain_Bucket}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></div>
    
    </>
  );
};

export default ProbStaTable;