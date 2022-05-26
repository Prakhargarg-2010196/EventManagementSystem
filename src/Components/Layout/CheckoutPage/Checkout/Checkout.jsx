import "./Checkout.css";

import { Component } from "react";
import React from "react";

class Checkout extends Component {
	render() {
		return (
			<div className="cartValue">
				<div className="cartValueHeader">Checkout</div>
				<div className="cartCharge">
					<div className="d-flex flex-column">
						<div>Event Charges: Rs.2300.7</div>
						<div>Tax: Rs. 430.6</div>
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
					className="orderButton btn"
				>
					Place Order
				</button>
			</div>
		);
	}
}
export default Checkout;
