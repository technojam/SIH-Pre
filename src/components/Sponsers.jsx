import { Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
// import matic from "../assets/matic.png";
// import fold from "../assets/fold.svg";
// import block from "../assets/block.png";
// import CNLOGO from "../assets/CNLOGO.svg";
// import index from "../assets/index.png";

// import red from "../assets/redfm.png";
import devfolio from "../assets/sponsers/Devfolio_Logo-Colored.svg";
import polygon from "../assets/sponsers/Polygon_Logo-Colored.png";
import replt from "../assets/sponsers/Replit.png";
// import codechef from "../assets/codechef.png";

export default function Sponsers() {
	return (
		<div style={{ background: "#070c1d" }} id="sponsors">
			<Container>
				<Typography
					textAlign="center"
					sx={{
						borderBottom: "2px solid #FAFAFA",
						pb: 3,
						color: "#FAFAFA",
					}}
					variant="h2"
				>
					Sponsors
				</Typography>
				<Typography
					textAlign="center"
					variant="h4"
					sx={{ color: "#FAFAFA", py: 5 }}
				>
					Platinum Partners
				</Typography>
				<Stack
					direction="row"
					spacing={5}
					justifyContent="center"
					alignItems="center"
					flexWrap="wrap"
				>
					<img src={devfolio} height="100" width="400" />
					<img src={polygon} height="100" width="400" />
				</Stack>
				<Divider sx={{ background: "grey", mt: 5 }} />

				<Typography
					textAlign="center"
					variant="h4"
					sx={{ color: "#FAFAFA", pt: 5 }}
				>
					Gold Sponsors
				</Typography>
				<Stack
					direction="row"
					spacing={5}
					justifyContent="center"
					alignItems="center"
					flexWrap="wrap"
				>
					<img src={replt} height="150" width="500" />
				</Stack>
				{/* <Divider sx={{ background: "grey" }} />

				<Typography
					textAlign="center"
					variant="h4"
					sx={{ color: "#FAFAFA", py: 5 }}
				>
					Silver Partners
				</Typography>
				<Stack
					direction="row"
					spacing={5}
					justifyContent="center"
					alignItems="center"
					flexWrap="wrap"
				>
					<img height="90" width="300" />
				</Stack> */}
				<Divider sx={{ background: "grey", mt: 5 }} />
			</Container>
		</div>
	);
}
