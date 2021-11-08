import "./Checkout.css";

import { Col, Container, Form, Image, Row } from "react-bootstrap";

import { Component } from "react";
import React from "react";

class Checkout extends Component {
	render() {
		return (
			<div>
					
					<Form.Control></Form.Control>
					
						{/* <Image src="" width={40}/> */}
				<Col style={{ margin: "0" }}>
					<div className="cartValue">
						<div className="cartValueHeader">PRICE DETAILS</div>
						<div className="cartCharge">
							<div>
								<div>Price</div>
								<div>Rs.</div>
							</div>
							<div>
								<div>Delivery Charges</div>
								<div>Rs. 50</div>
							</div>
						</div>
						<div className="totalAmount">
							<div>TOTAL AMOUNT</div>
							<div>Rs. </div>
						</div>
						<div className="deliveryBy">
							<div>Delivery By :</div>
							<div></div>
						</div>
						<button
							type="button"
							onClick={this.placeOrder}
							className="orderButton btn btn-dark"
						>
							Place Order
						</button>
					</div>
				</Col>
			</div>
		);
	}
}
export default Checkout;
