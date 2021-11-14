import { Col, Form, Row } from "react-bootstrap";
import { useEffect, useParams, useState } from "react";

import { BaseUrl } from "../../../../../../../../../api/services/BaseUrl";
import { DragNDrop } from "../DragNDrop/DragNDrop";
import crudService from "../../../../../../../../../api/services/crud-service";
import styles from "./UpdateImagesEvent.module.css";

const UpdateImagesEvent = (props) => {
	const [Files, setFilesArray] = useState({});
	const [result,setResult]=useState();
	const [currentid,setCurrentId]=useState(props.id);
	const FileData = new FormData();
	// Files.forEach((file) => {
	// 	console.log(file);
	// 	console.log(file.name);
	// 	FileData.append("files", file);
	// });
	/* DragDrop */
	const getAllImages=()=>{
		crudService.Read(currentid).then((res)=>{
			console.log(res.data);
			const result=res.data.post;
			setResult({result:result});
		})
	}
	const imgUrlModified=result.imageUrl.map((res)=>{
		return(`{BaseUrl()}${res}`)
	})
	console.log(imgUrlModified);
	
	
	useEffect(()=>{
       getAllImages();
	},[])
	
	return(<Form className={styles.form}>
		<Row className="mt-5">
			
			<Col>
				<Form.Label className={styles.requiredField} >
					fsdfs
				</Form.Label>
				<div>
					
				</div>
			</Col>
		</Row>
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
