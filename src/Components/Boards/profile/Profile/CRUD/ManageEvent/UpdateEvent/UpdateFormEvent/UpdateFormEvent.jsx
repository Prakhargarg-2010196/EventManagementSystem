// eslint:disable-next-line:no-unused-vars
// eslint:disable:no-unused-vars
import "react-toastify/dist/ReactToastify.css";

import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

import { BaseUrl } from "../../../../../../../../api/services/BaseUrl";
import { CategorySelect } from "./CategorySelect/CategorySelect";
import { Loader } from "../../../../../../../Layout/Loader/Loader";
import TimeField from "react-simple-timefield";
import crudService from "../../../../../../../../api/services/crud-service";
import styles from "./UpdateFormEvent.module.css";

const UpdateFormEvent = (props) => {
	const [content, setContent] = useState("");
	const [Categories, setArray] = useState([]);
	const [dateValue, setDateValue] = useState(null);
	const [timeValue, setTimeValue] = useState("24:00");
	const [money, setMoney] = useState();
	const history = useHistory();
	const [message, setMessage] = useState("");
	const [successful, setSuccess] = useState(false);

	const [isLoading, setLoading] = useState(true);

	const { id } = useParams();
	useEffect(() => {
		
		const getAllData = async () => {
			setLoading(false);
			await crudService.Read(id).then(
				(response) => {
					setSuccess(true);
					setContent(response.data.post.content);
					setDateValue(response.data.post.date.split("T")[0]);
					setTimeValue(response.data.post.time);
					setArray(response.data.post.category)
					setMoney(response.data.post.rate);
					setLoading(false);
				},

				(error) => {
					let message = "";
					if (!error.response || !BaseUrl()) {
						message = JSON.stringify(error.message).replace(/^"|"$/g, "");
					} else message = error.response.data;
					setSuccess(false);
					setMessage(message);
					setLoading(false);
				}
			);
		};
		getAllData();
	}, []);

	const handleDateUpdate = (e) => {
		const dateValue = e.target.value;
		const dateValueInEpoch = new Date(dateValue).getTime();
		setDateValue(dateValueInEpoch);
	};
	const handleImagesSubmit = (e) => {
		e.preventDefault();
		handleKeyPress(e);
		history.push({
			pathname: `/UpdateImages/${id}`,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		handleKeyPress(e);

		const FileData = {
			content: content,
			time: timeValue,
			category: Categories,
			date: dateValue,
			rate: money,
		};
		setLoading(true);

		await crudService.Update(id, FileData).then(
			(response) => {
				setSuccess(true);
				setLoading(false);
				history.push("/ManageEvent");
			},
			(error) => {
				let message = "";
				if (!error.response || !BaseUrl()) {
					message = JSON.stringify(error.message).replace(/^"|"$/g, "");
				} else message = error.response.data;
				setSuccess(false);
				setMessage(message);
				toast.error(message, {
					position: "bottom-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					style: { background: "pink", color: "black" },
				});
			}
		);
	};
	const handleKeyPress = (e) => {
		if (e.key === "Enter") e.preventDefault();
	};

	return (
		<>
			{isLoading ? (
				<Loader message={"Your Data is getting an updated"} />
			) : (
				<Form className={styles.form}>
					{/* Content */}
					{message && (
							<ToastContainer
								position="bottom-center"
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
							/>
						)}
					<Row className="mb-3">
						<Col md={6} sm={12}>
							<Form.Label className={styles.requiredField}>Content</Form.Label>
						</Col>
						<Col md={12} sm={8}>
							<Form.Control
								as="textarea"
								rows={5}
								defaultValue={content}
								className="w-100"
								onChange={(e) => {
									setContent(e.target.value);
								}}
							/>
						</Col>
					</Row>

					{/* Content end  */}

					{/* Category start */}
					<Row>
						<Col xs={12} md={6}>
							<Form.Label className={styles.requiredField}>Category</Form.Label>
						</Col>
						<Col xs={6} md={3}>
							<CategorySelect onSelect={setArray} defaultValue={Categories} />
						</Col>
					</Row>
					{/* Category end */}

					{/* Date start */}
					<Row className="mt-4">
						<Col md={6} sm={6}>
							<Form.Label className={styles.requiredField}>Date</Form.Label>
						</Col>
						<Col md={6} sm={12}>
							<input
								className="form-control"
								type="date"
								defaultValue={dateValue}
								onChange={(e) => handleDateUpdate(e)}
							/>
						</Col>
					</Row>
					{/* Date end */}

					{/* Time */}
					<Row className="mt-4">
						<Col>
							<Form.Label>Time(HH:MM) </Form.Label>
						</Col>

						<Col>
							<TimeField
								onChange={(e) => setTimeValue(e.target.value)}
								className="w-25"
								value={timeValue}
							/>
						</Col>
					</Row>

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
									defaultValue={money}
								/>
							</InputGroup>
						</Col>
					</Row>
					{/* money end */}

					<Button
						variant="primary"
						className={styles.button}
						onClick={(e) => {
							handleImagesSubmit(e);
						}}
						onKeyPress={(e) => {
							handleKeyPress(e);
						}}
					>
						Update images
					</Button>
					<Button
						variant="success"
												
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
			)}
		</>
	);
};
export default UpdateFormEvent;
