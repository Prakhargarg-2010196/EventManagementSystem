import "react-toastify/dist/ReactToastify.css";

import * as React from "react";

import { ToastContainer, toast } from "react-toastify";

import Stack from "@mui/material/Stack";
import postsService from "../../../../api/services/posts.service";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

export default function SearchBar() {
	const [message, setMessage] = useState("");
	const history = useHistory();

	const handleSubmit = async (e) => {
		if (e.key === "Enter") {
			const value = e.target.value;
			await postsService.SearchPost({ exp: value }).then(
				(response) => {
					history.push({
						pathname: "/SearchPage",
						state: { events: response.data },
					});
				},
				(error) => {
					let message = "";
					if (!error.response) {
						message = JSON.stringify(error.message).replace(/^"|"$/g, "");
					} else message = error.response.data;
					setMessage(message);
					toast.error(message, {
						position: "bottom-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						style: { background: "pink", color: "black" },
					});
				}
			);
		}
	};
	return (
		<>
			<Stack sx={{padding: "20px 0" ,display:"flex",justifyContent:"center" ,alignItems:"center",background:"#D1D4E8" }}>
				<input type="search" onKeyPress={(e) => handleSubmit(e)} style={{width: "100%", borderRadius:"10px" ,border:"grey solid"}}></input>
			</Stack>
			{message && (
						<ToastContainer
							position="bottom-center"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
						/>
					)}
		</>
	);
}
