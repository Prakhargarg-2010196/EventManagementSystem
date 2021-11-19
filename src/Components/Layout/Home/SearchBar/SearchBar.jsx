import * as React from "react";

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
				}
			);
		}
	};
	return (
		<>
			<Stack sx={{ width: "80%", margin: " 0 40px", padding: "20px 0" }}>
				<input type="search" onKeyPress={(e) => handleSubmit(e)} style={{width: "50%",marginLeft:"10em" ,borderRadius:"10px" ,border:"grey solid"}}></input>
			</Stack>
			{message && (
				<div className="form-group">
					<div className="alert alert-danger" role="alert">
						{message}
					</div>
				</div>
			)}
		</>
	);
}
