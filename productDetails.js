import React, { Component } from 'react';
import Minus from './minus.svg';
import Plus from './plus.svg';

class productDetails extends Component {
	constructor(props) {
		super(props);
		//console.log(props);
		this.state = {
			orders: [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
			price: 0,
			qnty: 0
		};
		this.incProduct = this.incProduct.bind();
		this.decProduct = this.decProduct.bind();
	}

	incProduct = (id, price) => {
		//	console.log(this.state.orders[id]);
		this.setState([ (this.state.orders[id] = this.state.orders[id] + 1) ]);
		this.setState([ (this.state.price = this.state.price + price) ]);
		this.setState([
			(this.state.qnty = this.state.orders.reduce(function(a, b) {
				return a + b;
			}, 0))
		]);
	};

	decProduct = (id, price) => {
		if (this.state.orders[id] <= 0) {
			this.setState([ (this.state.orders[id] = 0) ]);
		} else {
			this.setState([ (this.state.orders[id] = this.state.orders[id] - 1) ]);
			this.setState([ (this.state.price = this.state.price - price) ]);
			this.setState([
				(this.state.qnty = this.state.orders.reduce(function(a, b) {
					return a + b;
				}, 0))
			]);
		}
	};

	render() {
		//console.log(this.state.data);
		return (
			<div>
				{this.props.data.map((dataval, ind) => {
					//console.log(this.state.orders[ind]);
					return (
						<div className="item" key={dataval.id}>
							<div className="image">
								<img src={dataval.image_url} alt="" width="35%" />
								<p>{dataval.offer_price}% Off</p>
							</div>

							<div className="description">
								<span>Common Projects</span>
								<span>Bball High</span>
								<div className="total-price">
									<p>MRP: &#8377; {dataval.price}</p>
								</div>
								<div className="total-price">
									<p>MRF: &#8377; {dataval.mrf}</p>
								</div>
								<div className="quantity">
									<button
										className="plus-btn"
										type="button"
										onClick={() => {
											this.incProduct(ind, parseInt(dataval.mrf));
										}}
										name="button"
									>
										<img src={Plus} alt="" />
									</button>
									<input type="text" name="name" value={this.state.orders[ind]} onChange={() => {}} />
									<button
										className="minus-btn"
										type="button"
										onClick={() => {
											this.decProduct(ind, parseInt(dataval.mrf));
										}}
										name="button"
									>
										<img src={Minus} alt="" />
									</button>
								</div>
								<button
									className="button-add"
									onClick={this.props.retFunc(this.state.qnty, this.state.price)}
								>
									Add cart
								</button>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default productDetails;
