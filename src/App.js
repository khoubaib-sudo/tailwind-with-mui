import React from "react";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";

export default function App() {
	return (
		<>
			<CssBaseline />
			<div className="bg-black min-h-screen">
				<Button variant="contained" className="bg-blue-700 m-2">
					MyEsayTransfer
				</Button>
				<h1 className="text-white">Hello world</h1>
			</div>
		</>
	);
}
