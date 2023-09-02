import React from "react";
import { data } from "../assets/SIHTheme";
import { useParams } from "react-router";
import "./ProbStaTable.css";
import { useState } from "react";

import Modal from "./Modal";

const ProbStaTable = () => {
	const [openModal, setOpenModal] = useState(false);
	const [problemId, setProblemId] = useState(0);

	const { themeId } = useParams();

	const reqData = data.filter((theme) => theme.id === themeId)[0];

	const { ps } = reqData;

	if (!ps)
		return (
			<div className="table-container">
				<h1>No Data Found</h1>
			</div>
		);

	function handleOpenModal(psId) {
		setProblemId(psId);
		setOpenModal(true);
	}

	return (
		<>
			{openModal && (
				<Modal
					closeModal={setOpenModal}
					problemId={problemId}
				/>
			)}

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
							{ps.map((ps, idx) => (
								<tr key={idx}>
									<td>{idx + 1}</td>
									<td>{ps.Organization}</td>
									<td>
										<p
											onClick={() =>
												handleOpenModal(
													ps.PS_Number
												)
											}
										>
											{
												ps.Problem_Statement_Title
											}
										</p>
									</td>
									<td>{ps.Category}</td>
									<td>{ps.PS_Number}</td>
									<td>{ps.Domain_Bucket}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default ProbStaTable;
