// eslint:disable:no-unused-vars
// eslint:disable-next-line:no-unused-vars
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import React, { useState } from "react";

import { CategorySelect } from "./CategorySelect/CategorySelect";
import { DragNDrop } from "./DragNDrop/DragNDrop";
import TimeField from "react-simple-timefield";
import crudService from "../../../../../../../api/services/crud-service";
import styles from "./FormEvent.module.css";
import { useHistory } from "react-router-dom";

const FormEvent = (props) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [Categories, setArray] = useState([]);
	const [dateValue, setDateValue] = useState(null);
	const [timeValue, setTimeValue] = useState("24:00");
	const [optionValue, setOptionValue] = useState("");
	const [Url, setUrl] = useState("");
	const [City, setCity] = useState("");
	const [Address, setAddress] = useState("");
	const [money, setMoney] = useState();
	const [Files, setFilesArray] = useState({});
	const history = useHistory();
	const [resMessage, setResMessage] = useState({
		message: "",
		successful: false,
	});
	console.log(Categories);
	console.log(Files);
	const handleDateUpdate = (e) => {
		const dateValue = e.target.value;
		const dateValueInEpoch = new Date(dateValue).getTime();
		setDateValue(dateValueInEpoch);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		handleKeyPress(e);

		const isOnline = optionValue === "Online" ? true : false;
		const venueORlink = optionValue === "Offline" ? Address : Url;
		const city = optionValue === "Offline" ? City : "Online";
		var FileData = new FormData();
		Files.forEach((file) => {
			console.log(file);
			console.log(file.name);
			FileData.append("files", file);
		});

		FileData.append("title", title);
		FileData.append("content", content);
		FileData.append("date", dateValue);
		FileData.append("city", city);
		FileData.append("time", timeValue);

		Categories.forEach((category) => {
			FileData.append("category", category);
		});
		FileData.append("isOnline", isOnline);
		FileData.append("venueORlink", venueORlink);
		FileData.append("rate", money);

		await crudService.Create(FileData).then(
			(response) => {
				setResMessage({
					successful: true,
				});
				console.log(response.data);
			},
			(error) => {
				if (error.response.status === 401 || error.response.data === 402)
					history.push("/LogInPage");
				const respondMessage = error.response.data;
				setResMessage({
					successful: false,
					message: respondMessage,
				});
			}
		);
	};
	const handleKeyPress = (e) => {
		if (e.key === "Enter") e.preventDefault();
	};

	return (
		!resMessage.successful && (
			<Form className={styles.form}>
				{/* Title */}
				<Row>
					<Col>
						<Form.Label className={styles.requiredField}>Title</Form.Label>
						<Form.Control
							type="text"
							placeholder=""
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>
					</Col>
				</Row>

				{/* Content */}
				<Row className="mb-3">
					<Col md={6} sm={12}>
						<Form.Label className={styles.requiredField}>Content</Form.Label>
					</Col>
					<Col md={12} sm={8}>
						<Form.Control
							as="textarea"
							rows={5}
							className="w-100"
							onChange={(e) => {
								setContent(e.target.value);
							}}
						/>
					</Col>
				</Row>

				{/* Content end  */}

				<Row>
					<Col xs={12} md={6}>
						<Form.Label className={styles.requiredField}>Category</Form.Label>
					</Col>
					<Col xs={6} md={6}>
						<CategorySelect onSelect={setArray} />
					</Col>
				</Row>

				<Row className="mt-4">
					<Col md={6} sm={6}>
						<Form.Label className={styles.requiredField}>Date </Form.Label>
					</Col>
					<Col md={6} sm={12}>
						<input
							className="form-control"
							type="date"
							onChange={(e) => handleDateUpdate(e)}
						/>
					</Col>
				</Row>

				{/* Time */}
				<Row className="mt-4">
					<Col>
						<Form.Label>Time(HH:MM) </Form.Label>
					</Col>

					<Col>
						<TimeField
							value={timeValue}
							onChange={(e) => setTimeValue(e.target.value)}
							className="w-25"
						/>
					</Col>
				</Row>

				{/* Mode of events */}
				<Row className="mt-4">
					<Form.Label
						className={styles.requiredField}
						style={{ marginBottom: "30px" }}
					>
						Mode of Event
					</Form.Label>

					{/*Online Option  */}
					<Col sm={12} md={6}>
						<div className="form-check">
							<label className="form-check-label" htmlFor="flexRadioDefault1">
								<input
									className="form-check-input"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault1"
									value="Online"
									onChange={(e) => {
										setOptionValue(e.target.value);
									}}
								/>
								Online
							</label>

							{optionValue === "Online" && (
								<Col>
									<Form.Label className={styles.requiredField}>Url</Form.Label>
									<Form.Control
										type="url"
										placeholder=""
										onChange={(e) => {
											setUrl(e.target.value);
										}}
									/>
								</Col>
							)}
						</div>
					</Col>

					{/* Offline option */}
					<Col>
						<div className="form-check">
							<label className="form-check-label" htmlFor="flexRadioDefault2">
								<input
									className="form-check-input mb-4"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault2"
									value="Offline"
									onChange={(e) => {
										setOptionValue(e.target.value);
									}}
								/>
								Offline
							</label>

							{optionValue === "Offline" && (
								<>
									<Row>
										<Col>
											<Form.Label className={styles.requiredField}>
												Main Address
											</Form.Label>
											<Form.Control
												as="textarea"
												rows={3}
												className={styles.formTextArea}
												onChange={(e) => {
													setAddress(e.target.value);
												}}
											/>
										</Col>
									</Row>
									<Row className="mt-4">
										<Col>
											<Form.Label className={styles.requiredField}>
												City
											</Form.Label>
										</Col>
										<Col>
											<Form.Control
												type="text"
												placeholder=""
												onChange={(e) => {
													setCity(e.target.value);
												}}
											/>
										</Col>
									</Row>
								</>
							)}
						</div>
					</Col>
				</Row>
				{/* Mode of events end */}

				{/* Money */}
				<Row className="mt-5">
					<Col md={6}>
						<Form.Label className={styles.requiredField}>
							Price(in INR)
						</Form.Label>
					</Col>
					<Col md={6}>
						<InputGroup className="">
							<InputGroup.Text>₹</InputGroup.Text>
							<Form.Control
								aria-label="Amount (to the nearest rupee)"
								className="w-50"
								onChange={(e) => {
									setMoney(e.target.value);
								}}
							/>
						</InputGroup>
					</Col>
				</Row>
				{/* money end */}

				{/* DragDrop */}
				<Row className="mt-5">
					<Col>
						<Form.Label className={styles.requiredField}>
							Browse select one at a time or select multiple or drop multiple{" "}
						</Form.Label>

						<DragNDrop onGet={setFilesArray} />
					</Col>
				</Row>
				{/* DragDrop END */}

				<Button
					variant="primary"
					className={styles.button}
					onClick={(e) => {
						handleSubmit(e);
					}}
					onKeyPress={(e) => {
						handleKeyPress(e);
					}}
				>
					Submit
				</Button>
			</Form>
		)
	);
};
export default FormEvent;
