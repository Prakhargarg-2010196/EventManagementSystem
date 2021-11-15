import { Button, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import { BaseUrl } from "../../../../../../../../../api/services/BaseUrl";
import { DragNDrop } from "../DragNDrop/DragNDrop";
import crudService from "../../../../../../../../../api/services/crud-service";
import postsService from "../../../../../../../../../api/services/posts.service";
import styles from "./UpdateImagesEvent.module.css";
import { useParams } from "react-router-dom";

const UpdateImagesEvent = () => {
	const [Files, setFilesArray] = useState({});
	const [result, setResult] = useState({});
	let imgPath = [];
	let imageUrlUpdate = [];
	useEffect(() => {
		async function getAllimages() {
			const response = await crudService.Read(id);
			setResult(response.data.post);
		}
		getAllimages();
	}, [id]);

	const { id } = useParams();

	if (result.imageUrl) {
		imgPath = result.imageUrl;
		imageUrlUpdate = imgPath.map((img) => `${BaseUrl()}${img}`);
	}

	const handleDelete = (e, id, imageUrl) => {
		e.preventDefault();
		console.log(imageUrl);
		postsService.DeleteImage(id, imageUrl).then((res) => console.log(res));
	};

	const handleAdd = (e, id) => {
		e.preventDefault();
		var FileData = new FormData();
		Files.forEach((file) => {
			FileData.append("files", file);
		});
		postsService.AddImage(id, FileData).then((res) => console.log(res));
	};
	return (
		<Form className={styles.form}>
			<Row className="mt-5">
				<Col>
					<Form.Label className={styles.requiredField}>Your Images</Form.Label>
					{imageUrlUpdate.map((image) => (
						<div className="d-flex justify-content-between">
							<img
								src={image}
								width={400}
								style={{ marginBottom: "10px" }}
								alt=""
							/>
							<Button
								style={{ marginBottom: "10px" }}
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

					<DragNDrop imagesLength={imageUrlUpdate.length} onGet={setFilesArray} />
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
	);
	/* DragDrop END */
};
export default UpdateImagesEvent;
