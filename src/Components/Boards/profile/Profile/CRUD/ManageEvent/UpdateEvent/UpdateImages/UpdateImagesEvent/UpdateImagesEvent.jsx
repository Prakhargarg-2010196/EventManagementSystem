import { Col, Form, Row } from "react-bootstrap";

import { DragNDrop } from "../DragNDrop/DragNDrop";
import styles from "./UpdateImagesEvent.module.css";
import { useState } from "react";

// import React, { useState } from "react";


const UpdateImagesEvent = (props) => {
	const [Files, setFilesArray] = useState({});
    
    const FileData = new FormData();
	// Files.forEach((file) => {
	// 	console.log(file);
	// 	console.log(file.name);
	// 	FileData.append("files", file);
	// });
	/* DragDrop */
	return(<Form className={styles.form}>
		<Row className="mt-5">
			<Col>
				<Form.Label className={styles.requiredField} >
					Browse select one at a time or select multiple or drop multiple{" "}
				</Form.Label>
                    
				<DragNDrop onGet={setFilesArray} />
			</Col>
		</Row>
		
	</Form>)
	/* DragDrop END */
};
export default UpdateImagesEvent;
