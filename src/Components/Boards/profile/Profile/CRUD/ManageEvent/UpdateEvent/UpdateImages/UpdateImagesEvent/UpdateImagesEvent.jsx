import { Button, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import { BaseUrl } from "../../../../../../../../../api/services/BaseUrl";
import { DragNDrop } from "../DragNDrop/DragNDrop";
import { Loader } from "../../../../../../../../Layout/Loader/Loader";
import crudService from "../../../../../../../../../api/services/crud-service";
import postsService from "../../../../../../../../../api/services/posts.service";
import styles from "./UpdateImagesEvent.module.css";
import { useParams } from "react-router-dom";

const UpdateImagesEvent = () => {
	const [Files, setFilesArray] = useState({});
	const [result, setResult] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [isAdded, setAdded] = useState(false);
	let imgPath = [];
	let imageUrlUpdate = [];
	useEffect(() => {
		async function getAllimages() {
			const response = await crudService.Read(id);
			setResult(response.data.post);
			setLoading(false);
		}
		getAllimages();
	}, []);

	const { id } = useParams();

	if (result.imageUrl) {
		imgPath = result.imageUrl;
		imageUrlUpdate = imgPath.map((img) => `${BaseUrl()}${img}`);
	}

	const handleDelete = async (e, id, imageUrl) => {
		e.preventDefault();
		console.log(imageUrl);
		setLoading(true);
		await postsService.DeleteImage(id, imageUrl);
 
		const response = await crudService.Read(id);
		setResult(response.data.post);
		setLoading(false);
	};

	const handleAdd = async (e, id) => {
		e.preventDefault();
		var FileData = new FormData();
		Files.forEach((file) => {
			FileData.append("files", file);
		});
		setLoading(true);
		await postsService.AddImage(id, FileData);
		console.log(isAdded);
		const response = await crudService.Read(id);
		setResult(response.data.post);
		setAdded(true);
		setLoading(false);
	};
	return (
		<>
			{isLoading ? (
				<Loader message={"Your Images are Updating"} />
			) : (
				<Form>
					<Row>
						<Col>
							<Form.Label className={styles.requiredField}>
								Your Images
							</Form.Label>
							{imageUrlUpdate.map((image, index) => (
								<div className="d-flex justify-content-between" key={index}>
									<img
										src={image}
										width={200}
										style={{ marginBottom: "10px" }}
										alt=""
									/>
									<Button
										style={{height:"20%" }}
										onClick={(e) => {
											handleDelete(e, id, image);
										}}
									>
										{" "}
										Delete
									</Button>
								</div>
							))}
						</Col>
						<Col>
							<Form.Label className={styles.requiredField}>
								Browse select one at a time or select multiple or drop multiple{" "}
							</Form.Label>
							{console.log(isAdded)}
							<DragNDrop
								imagesLength={imageUrlUpdate.length}
								onGet={setFilesArray}
								isAdded={isAdded}
							/>
							<Button
								className="w-100"
								onClick={(e) => {
									handleAdd(e, id);
								}}
							>
								Add images
							</Button>
						</Col>
					</Row>
				</Form>
			)}	
		</>
	);
	/* DragDrop END */
};
export default UpdateImagesEvent;
